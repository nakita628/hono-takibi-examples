type PropertyModificationMetadata = {
  archivable: boolean
  readOnlyDefinition: boolean
  readOnlyOptions?: boolean | undefined
  readOnlyValue: boolean
}
type Option = {
  description?: string | undefined
  displayOrder?: number | undefined
  hidden: boolean
  label: string
  value: string
}
type Property = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  calculated?: boolean | undefined
  calculationFormula?: string | undefined
  createdAt?: string | undefined
  createdUserId?: string | undefined
  currencyPropertyName?: string | undefined
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
  dateDisplayHint?: 'absolute' | 'absolute_with_relative' | 'time_since' | 'time_until' | undefined
  description: string
  displayOrder?: number | undefined
  externalOptions?: boolean | undefined
  fieldType: string
  formField?: boolean | undefined
  groupName: string
  hasUniqueValue?: boolean | undefined
  hidden?: boolean | undefined
  hubspotDefined?: boolean | undefined
  label: string
  modificationMetadata?: PropertyModificationMetadata | undefined
  name: string
  numberDisplayHint?:
    | 'currency'
    | 'duration'
    | 'formatted'
    | 'percentage'
    | 'probability'
    | 'unformatted'
    | undefined
  options: Option[]
  referencedObjectType?: string | undefined
  sensitiveDataCategories?: string[] | undefined
  showCurrencySymbol?: boolean | undefined
  textDisplayHint?:
    | 'domain_name'
    | 'email'
    | 'ip_address'
    | 'multi_line'
    | 'phone_number'
    | 'physical_address'
    | 'postal_code'
    | 'unformatted_single_line'
    | undefined
  type: string
  updatedAt?: string | undefined
  updatedUserId?: string | undefined
}
type CollectionResponsePropertyNoPaging = { results: Property[] }
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type OptionInput = {
  description?: string | undefined
  displayOrder: number
  hidden: boolean
  label: string
  value: string
}
type PropertyCreate = {
  calculationFormula?: string | undefined
  currencyPropertyName?: string | undefined
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
  description?: string | undefined
  displayOrder?: number | undefined
  externalOptions?: boolean | undefined
  fieldType:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea'
  formField?: boolean | undefined
  groupName: string
  hasUniqueValue?: boolean | undefined
  hidden?: boolean | undefined
  label: string
  name: string
  numberDisplayHint?:
    | 'currency'
    | 'duration'
    | 'formatted'
    | 'percentage'
    | 'probability'
    | 'unformatted'
    | undefined
  options?: OptionInput[] | undefined
  referencedObjectType?: string | undefined
  showCurrencySymbol?: boolean | undefined
  textDisplayHint?:
    | 'domain_name'
    | 'email'
    | 'ip_address'
    | 'multi_line'
    | 'phone_number'
    | 'physical_address'
    | 'postal_code'
    | 'unformatted_single_line'
    | undefined
  type: 'bool' | 'date' | 'datetime' | 'enumeration' | 'number' | 'phone_number' | 'string'
}
type PropertyName = { name: string }
type BatchInputPropertyName = { inputs: PropertyName[] }
type BatchInputPropertyCreate = { inputs: PropertyCreate[] }
type BatchResponseProperty = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: Property[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type BatchResponsePropertyWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: Property[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchReadInputPropertyName = {
  archived: boolean
  dataSensitivity: 'highly_sensitive' | 'non_sensitive' | 'sensitive'
  inputs: PropertyName[]
}
type PropertyGroup = {
  archived: boolean
  displayOrder?: number | undefined
  label: string
  name: string
}
type CollectionResponsePropertyGroupNoPaging = { results: PropertyGroup[] }
type PropertyGroupCreate = { displayOrder?: number | undefined; label: string; name: string }
type PropertyGroupUpdate = { displayOrder?: number | undefined; label?: string | undefined }
type PropertyUpdate = {
  calculationFormula?: string | undefined
  currencyPropertyName?: string | undefined
  description?: string | undefined
  displayOrder?: number | undefined
  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea'
    | undefined
  formField?: boolean | undefined
  groupName?: string | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  numberDisplayHint?:
    | 'currency'
    | 'duration'
    | 'formatted'
    | 'percentage'
    | 'probability'
    | 'unformatted'
    | undefined
  options?: OptionInput[] | undefined
  showCurrencySymbol?: boolean | undefined
  textDisplayHint?:
    | 'domain_name'
    | 'email'
    | 'ip_address'
    | 'multi_line'
    | 'phone_number'
    | 'physical_address'
    | 'postal_code'
    | 'unformatted_single_line'
    | undefined
  type?:
    | 'bool'
    | 'date'
    | 'datetime'
    | 'enumeration'
    | 'number'
    | 'phone_number'
    | 'string'
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/properties/2026-09/:objectType': {
      $get:
        | {
            input: { param: { objectType: string } } & {
              query: {
                archived?: boolean | undefined
                dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
                locale?: string | undefined
                properties?: string | undefined
              }
            }
            output: CollectionResponsePropertyNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              query: {
                archived?: boolean | undefined
                dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
                locale?: string | undefined
                properties?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { objectType: string } } & { json: PropertyCreate }
            output: Property
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & { json: PropertyCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/properties/2026-09/:objectType/batch/archive': {
      $post: {
        input: { param: { objectType: string } } & { json: BatchInputPropertyName }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/properties/2026-09/:objectType/batch/create': {
      $post:
        | {
            input: { param: { objectType: string } } & { json: BatchInputPropertyCreate }
            output: BatchResponseProperty
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & { json: BatchInputPropertyCreate }
            output: BatchResponsePropertyWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { objectType: string } } & { json: BatchInputPropertyCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/properties/2026-09/:objectType/batch/read': {
      $post:
        | {
            input: { param: { objectType: string } } & {
              query: { locale?: string | undefined }
            } & { json: BatchReadInputPropertyName }
            output: BatchResponseProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              query: { locale?: string | undefined }
            } & { json: BatchReadInputPropertyName }
            output: BatchResponsePropertyWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { objectType: string } } & {
              query: { locale?: string | undefined }
            } & { json: BatchReadInputPropertyName }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/properties/2026-09/:objectType/groups': {
      $get:
        | {
            input: { param: { objectType: string } } & { query: { locale?: string | undefined } }
            output: CollectionResponsePropertyGroupNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & { query: { locale?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { objectType: string } } & { json: PropertyGroupCreate }
            output: PropertyGroup
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & { json: PropertyGroupCreate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/properties/2026-09/:objectType/groups/:groupName': {
      $get:
        | {
            input: { param: { groupName: string; objectType: string } } & {
              query: { locale?: string | undefined }
            }
            output: PropertyGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupName: string; objectType: string } } & {
              query: { locale?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { groupName: string; objectType: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { groupName: string; objectType: string } } & {
              json: PropertyGroupUpdate
            }
            output: PropertyGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupName: string; objectType: string } } & {
              json: PropertyGroupUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/properties/2026-09/:objectType/:propertyName': {
      $get:
        | {
            input: { param: { objectType: string; propertyName: string } } & {
              query: {
                archived?: boolean | undefined
                dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
                locale?: string | undefined
                properties?: string | undefined
              }
            }
            output: Property
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; propertyName: string } } & {
              query: {
                archived?: boolean | undefined
                dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
                locale?: string | undefined
                properties?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { objectType: string; propertyName: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { objectType: string; propertyName: string } } & {
              json: PropertyUpdate
            }
            output: Property
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; propertyName: string } } & {
              json: PropertyUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
