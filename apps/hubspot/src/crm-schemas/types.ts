type AssociationDefinition = {
  createdAt?: string | undefined
  fromObjectTypeId: string
  id: string
  name?: string | undefined
  toObjectTypeId: string
  updatedAt?: string | undefined
}
type ObjectTypeDefinitionLabels = { plural?: string | undefined; singular?: string | undefined }
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
type ObjectSchema = {
  allowsSensitiveProperties: boolean
  archived: boolean
  associations: AssociationDefinition[]
  createdAt?: string | undefined
  createdByUserId?: number | undefined
  description?: string | undefined
  fullyQualifiedName: string
  id: string
  labels: ObjectTypeDefinitionLabels
  name: string
  objectTypeId: string
  primaryDisplayProperty?: string | undefined
  properties: Property[]
  requiredProperties: string[]
  searchableProperties: string[]
  secondaryDisplayProperties: string[]
  updatedAt?: string | undefined
  updatedByUserId?: number | undefined
}
type CollectionResponseObjectSchemaNoPaging = { results: ObjectSchema[] }
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
type ObjectTypePropertyCreate = {
  description?: string | undefined
  displayOrder?: number | undefined
  externalOptionsReferenceType?: string | undefined
  fieldType: string
  formField?: boolean | undefined
  groupName?: string | undefined
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
  optionSortStrategy?: 'ALPHABETICAL' | 'DISPLAY_ORDER' | undefined
  options?: OptionInput[] | undefined
  referencedObjectType?: string | undefined
  searchableInGlobalSearch?: boolean | undefined
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
type ObjectSchemaEgg = {
  allowsSensitiveProperties: boolean
  associatedObjects: string[]
  description?: string | undefined
  labels: ObjectTypeDefinitionLabels
  name: string
  primaryDisplayProperty?: string | undefined
  properties: ObjectTypePropertyCreate[]
  requiredProperties: string[]
  searchableProperties: string[]
  secondaryDisplayProperties: string[]
  shouldCreateSameObjectAssociation: boolean
}
type ObjectSchemaBatchReadRequest = {
  includeAssociationDefinitions: boolean
  includeAuditMetadata: boolean
  includePropertyDefinitions: boolean
  inputs: string[]
}
type ObjectTypeDefinitionPatch = {
  allowsSensitiveProperties?: boolean | undefined
  clearDescription: boolean
  description?: string | undefined
  labels?: ObjectTypeDefinitionLabels | undefined
  primaryDisplayProperty?: string | undefined
  requiredProperties?: string[] | undefined
  restorable?: boolean | undefined
  searchableProperties?: string[] | undefined
  secondaryDisplayProperties?: string[] | undefined
}
type ObjectTypeDefinition = {
  allowsSensitiveProperties: boolean
  archived: boolean
  createdAt?: string | undefined
  description?: string | undefined
  fullyQualifiedName: string
  id: string
  labels: ObjectTypeDefinitionLabels
  name: string
  objectTypeId: string
  portalId?: number | undefined
  primaryDisplayProperty?: string | undefined
  requiredProperties: string[]
  searchableProperties: string[]
  secondaryDisplayProperties: string[]
  updatedAt?: string | undefined
}
type AssociationDefinitionEgg = {
  fromObjectTypeId: string
  name?: string | undefined
  toObjectTypeId: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm-object-schemas/2026-09/schemas': {
      $get:
        | {
            input: {
              query: {
                archived?: boolean | undefined
                includeAssociationDefinitions?: boolean | undefined
                includeAuditMetadata?: boolean | undefined
                includePropertyDefinitions?: boolean | undefined
              }
            }
            output: CollectionResponseObjectSchemaNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                archived?: boolean | undefined
                includeAssociationDefinitions?: boolean | undefined
                includeAuditMetadata?: boolean | undefined
                includePropertyDefinitions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ObjectSchemaEgg }
            output: ObjectSchema
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ObjectSchemaEgg }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm-object-schemas/2026-09/schemas/batch/read': {
      $post:
        | {
            input: { json: ObjectSchemaBatchReadRequest }
            output: CollectionResponseObjectSchemaNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ObjectSchemaBatchReadRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm-object-schemas/2026-09/schemas/:objectType': {
      $get:
        | {
            input: { param: { objectType: string } } & {
              query: {
                includeAssociationDefinitions?: boolean | undefined
                includeAuditMetadata?: boolean | undefined
                includePropertyDefinitions?: boolean | undefined
              }
            }
            output: ObjectSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & {
              query: {
                includeAssociationDefinitions?: boolean | undefined
                includeAuditMetadata?: boolean | undefined
                includePropertyDefinitions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { objectType: string } } & { query: { archived?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectType: string } } & { query: { archived?: boolean | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { objectType: string } } & { json: ObjectTypeDefinitionPatch }
            output: ObjectTypeDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } } & { json: ObjectTypeDefinitionPatch }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm-object-schemas/2026-09/schemas/:objectType/associations': {
      $post:
        | {
            input: { param: { objectType: string } } & { json: AssociationDefinitionEgg }
            output: AssociationDefinition
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & { json: AssociationDefinitionEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm-object-schemas/2026-09/schemas/:objectType/associations/:associationIdentifier': {
      $delete:
        | {
            input: { param: { associationIdentifier: string; objectType: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { associationIdentifier: string; objectType: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
