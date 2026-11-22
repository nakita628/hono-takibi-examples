type PublicAssociationDefinitionUserConfiguration = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  label?: string | undefined
  typeId: number
  userEnforcedMaxToObjectIds?: number | undefined
}
type CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging = {
  results: PublicAssociationDefinitionUserConfiguration[]
}
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
type PublicAssociationDefinitionConfigurationCreateRequest = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  maxToObjectIds: number
  typeId: number
}
type BatchInputPublicAssociationDefinitionConfigurationCreateRequest = {
  inputs: PublicAssociationDefinitionConfigurationCreateRequest[]
}
type BatchResponsePublicAssociationDefinitionUserConfiguration = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionUserConfiguration[]
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
type BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionUserConfiguration[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicAssociationSpec = { category: string; typeId: number }
type BatchInputPublicAssociationSpec = { inputs: PublicAssociationSpec[] }
type BatchResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: { [x: string]: unknown }[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicAssociationDefinitionConfigurationUpdateRequest = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  maxToObjectIds: number
  typeId: number
}
type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest = {
  inputs: PublicAssociationDefinitionConfigurationUpdateRequest[]
}
type PublicAssociationDefinitionConfigurationUpdateResult = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  typeId: number
  userEnforcedMaxToObjectIds?: number | undefined
}
type BatchResponsePublicAssociationDefinitionConfigurationUpdateResult = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionConfigurationUpdateResult[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicAssociationDefinitionConfigurationUpdateResult[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type AssociationSpecWithLabel = {
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  fromObjectTypeId?: string | undefined
  label?: string | undefined
  toObjectTypeId?: string | undefined
  typeId: number
}
type CollectionResponseAssociationSpecWithLabelNoPaging = { results: AssociationSpecWithLabel[] }
type PublicAssociationDefinitionUpdateRequest = {
  associationTypeId: number
  inverseLabel?: string | undefined
  label: string
}
type PublicAssociationDefinitionCreateRequest = {
  inverseLabel?: string | undefined
  label: string
  name: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/associations/2026-09/definitions/configurations/all': {
      $get:
        | {
            input: {}
            output: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType': {
      $get:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/create': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
            }
            output: BatchResponsePublicAssociationDefinitionUserConfiguration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
            }
            output: BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/purge': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationSpec
            }
            output: BatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationSpec
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/update': {
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
            }
            output: BatchResponsePublicAssociationDefinitionConfigurationUpdateResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
            }
            output: BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels': {
      $get:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: CollectionResponseAssociationSpecWithLabelNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { fromObjectType: string; toObjectType: string } } & {
          json: PublicAssociationDefinitionUpdateRequest
        }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: PublicAssociationDefinitionCreateRequest
            }
            output: CollectionResponseAssociationSpecWithLabelNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectType: string; toObjectType: string } } & {
              json: PublicAssociationDefinitionCreateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels/:associationTypeId': {
      $delete: {
        input: {
          param: { associationTypeId: number; fromObjectType: string; toObjectType: string }
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
