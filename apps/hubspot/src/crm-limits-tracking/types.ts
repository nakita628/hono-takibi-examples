type ObjectTypeDefinition = { objectTypeId: string; pluralLabel: string; singularLabel: string }
type AssociationLabelLimitResponse = {
  allLabels: string[]
  fromObjectType: ObjectTypeDefinition
  limit: bigint
  percentage: number
  toObjectType: ObjectTypeDefinition
  usage: bigint
}
type CollectionResponseAssociationLabelLimitResponseNoPaging = {
  results: AssociationLabelLimitResponse[]
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
type ObjectTypeNearOrAtAssociationLimit = {
  hasRecordsAtLimit: boolean
  hasRecordsNearLimit: boolean
  objectTypeId: string
  pluralLabel: string
  singularLabel: string
}
type CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging = {
  results: ObjectTypeNearOrAtAssociationLimit[]
}
type AtLimitRecordSample = { label: string; objectId: bigint }
type NearLimitRecordSample = { label: string; objectId: bigint; percentage: number; usage: bigint }
type AssociationRecordLimitResponse = {
  atLimitFromRecordSamples: AtLimitRecordSample[]
  limit: bigint
  nearLimitFromRecordSamples: NearLimitRecordSample[]
  totalRecordsAtLimit: number
  totalRecordsNearLimit: number
}
type UsageForObjectType = {
  objectTypeId: string
  pluralLabel: string
  singularLabel: string
  usage: bigint
}
type CalculatedPropertyLimitResponse = {
  byObjectType: UsageForObjectType[]
  overallLimit: bigint
  overallPercentage: number
  overallUsage: bigint
}
type CustomObjectLimitResponse = { limit: bigint; percentage: number; usage: bigint }
type LimitAndUsageForObjectType = {
  limit: bigint
  objectTypeId: string
  percentage: number
  pluralLabel: string
  singularLabel: string
  usage: bigint
}
type CustomPropertyLimitResponse = {
  byObjectType: LimitAndUsageForObjectType[]
  overallLimit: bigint
  overallPercentage: number
  overallUsage: bigint
}
type CustomObjectRecordLimitResponse = {
  byObjectType: UsageForObjectType[]
  overallLimit: bigint
  overallPercentage: number
  overallUsage: bigint
}
type PipelineLimitResponse = {
  customObjectTypes: CustomObjectRecordLimitResponse
  hubspotDefinedObjectTypes: LimitAndUsageForObjectType[]
}
type RecordLimitResponse = {
  customObjectTypes: CustomObjectRecordLimitResponse
  hubspotDefinedObjectTypes: LimitAndUsageForObjectType[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/limits/2026-09/associations/labels': {
      $get:
        | {
            input: {
              query: { fromObjectTypeId?: string | undefined; toObjectTypeId?: string | undefined }
            }
            output: CollectionResponseAssociationLabelLimitResponseNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { fromObjectTypeId?: string | undefined; toObjectTypeId?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/limits/2026-09/associations/records/from': {
      $get:
        | {
            input: {}
            output: CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/limits/2026-09/associations/records/:fromObjectTypeId/to': {
      $get:
        | {
            input: { param: { fromObjectTypeId: string } }
            output: CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectTypeId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/limits/2026-09/associations/records/:fromObjectTypeId/:toObjectTypeId': {
      $get:
        | {
            input: { param: { fromObjectTypeId: string; toObjectTypeId: string } }
            output: AssociationRecordLimitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromObjectTypeId: string; toObjectTypeId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/limits/2026-09/calculated-properties': {
      $get:
        | { input: {}; output: CalculatedPropertyLimitResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/limits/2026-09/custom-object-types': {
      $get:
        | { input: {}; output: CustomObjectLimitResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/limits/2026-09/custom-properties': {
      $get:
        | { input: {}; output: CustomPropertyLimitResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/limits/2026-09/pipelines': {
      $get:
        | { input: {}; output: PipelineLimitResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/limits/2026-09/records': {
      $get:
        | { input: {}; output: RecordLimitResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
