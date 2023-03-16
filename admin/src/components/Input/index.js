import React from "react";
import {
  FieldAction,
  FieldInput,
  FieldLabel,
} from "@strapi/design-system/Field";


import { Stack } from "@strapi/design-system/Stack";
import Refresh from "@strapi/icons/Refresh";
import styled from "styled-components";

export default function Index({ name, value, onChange, intlLabel, attribute }) {
  const dateObj = new Date();
  let year = dateObj.getFullYear();
  let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let day = ("0" + dateObj.getDate()).slice(-2);
  let hours = ("0" + dateObj.getHours()).slice(-2);
  let minutes = ("0" + dateObj.getMinutes()).slice(-2);
  let seconds = ("0" + dateObj.getSeconds()).slice(-2);
  let slug_name;
  

  let datetime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

  if (attribute.options.kw){
    slug_name = `${attribute.options.kw}-${datetime}`;
  } else {
    slug_name = `post-${datetime}`;
  }

  const generateSlug = () => {
    onChange({ target: { name, value: slug_name } });
  };

  const clearGeneratedSlug = () => {
    onChange({ target: { name, value: "" } });
    console.log('attr: ', attribute);
  };

  return (
    <Stack spacing={1}>
     
      <FieldLabel>{intlLabel?.defaultMessage}</FieldLabel>
 

      <FieldInput
        label="slug"
        name="slug"
        onChange={(e) =>
          onChange({
            target: { name, value: e.target.value },
          })
        }
        value={value ? value : generateSlug()}
        endAction={
          <FieldActionWrapper onClick={() => clearGeneratedSlug()}>
            <Refresh />
          </FieldActionWrapper>
        }
      />
    </Stack>
  );
}

export const FieldActionWrapper = styled(FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }
  }
  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
