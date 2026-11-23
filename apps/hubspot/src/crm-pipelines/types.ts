type PipelineStage = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  displayOrder: number
  id: string
  label: string
  metadata: { [x: string]: string }
  updatedAt: string
  writePermissions: 'CRM_PERMISSIONS_ENFORCEMENT' | 'INTERNAL_ONLY' | 'READ_ONLY'
}
type Pipeline = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  displayOrder: number
  id: string
  label: string
  stages: PipelineStage[]
  updatedAt: string
}
type CollectionResponsePipelineNoPaging = { results: Pipeline[] }
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
type PipelineStageInput = {
  displayOrder: number
  label: string
  metadata: { [x: string]: string }
  stageId?: string | undefined
}
type PipelineInput = {
  displayOrder: number
  label: string
  pipelineId?: string | undefined
  stages: PipelineStageInput[]
}
type PipelineReplaceInput = { displayOrder: number; label: string; stages: PipelineStageInput[] }
type PipelinePatchInput = {
  archived?: boolean | undefined
  displayOrder?: number | undefined
  label?: string | undefined
}
type PublicAuditInfo = {
  action: string
  fromUserId?: number | undefined
  identifier: string
  message?: string | undefined
  portalId: number
  rawObject?: { [x: string]: unknown } | undefined
  timestamp?: string | undefined
}
type CollectionResponsePublicAuditInfoNoPaging = { results: PublicAuditInfo[] }
type CollectionResponsePipelineStageNoPaging = { results: PipelineStage[] }
type PipelineStageReplaceInput = {
  displayOrder: number
  label: string
  metadata: { [x: string]: string }
}
type PipelineStagePatchInput = {
  archived?: boolean | undefined
  displayOrder?: number | undefined
  label?: string | undefined
  metadata: { [x: string]: string }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/pipelines/2026-09/:objectType': {
      $get:
        | {
            input: { param: { objectType: string } }
            output: CollectionResponsePipelineNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { objectType: string } } & { json: PipelineInput }
            output: Pipeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string } } & { json: PipelineInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines/2026-09/:objectType/:pipelineId': {
      $get:
        | {
            input: { param: { objectType: string; pipelineId: string } }
            output: Pipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { objectType: string; pipelineId: string } } & {
              query: {
                validateDealStageUsagesBeforeDelete?: boolean | undefined
                validateReferencesBeforeDelete?: boolean | undefined
              }
            } & { json: PipelineReplaceInput }
            output: Pipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string } } & {
              query: {
                validateDealStageUsagesBeforeDelete?: boolean | undefined
                validateReferencesBeforeDelete?: boolean | undefined
              }
            } & { json: PipelineReplaceInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { objectType: string; pipelineId: string } } & {
          query: {
            validateDealStageUsagesBeforeDelete?: boolean | undefined
            validateReferencesBeforeDelete?: boolean | undefined
          }
        }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { objectType: string; pipelineId: string } } & {
              query: {
                validateDealStageUsagesBeforeDelete?: boolean | undefined
                validateReferencesBeforeDelete?: boolean | undefined
              }
            } & { json: PipelinePatchInput }
            output: Pipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string } } & {
              query: {
                validateDealStageUsagesBeforeDelete?: boolean | undefined
                validateReferencesBeforeDelete?: boolean | undefined
              }
            } & { json: PipelinePatchInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines/2026-09/:objectType/:pipelineId/audit': {
      $get:
        | {
            input: { param: { objectType: string; pipelineId: string } }
            output: CollectionResponsePublicAuditInfoNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines/2026-09/:objectType/:pipelineId/stages': {
      $get:
        | {
            input: { param: { objectType: string; pipelineId: string } }
            output: CollectionResponsePipelineStageNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { objectType: string; pipelineId: string } } & {
              json: PipelineStageInput
            }
            output: PipelineStage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { objectType: string; pipelineId: string } } & {
              json: PipelineStageInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId': {
      $get:
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } }
            output: PipelineStage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } } & {
              json: PipelineStageReplaceInput
            }
            output: PipelineStage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } } & {
              json: PipelineStageReplaceInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { objectType: string; pipelineId: string; stageId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } } & {
              json: PipelineStagePatchInput
            }
            output: PipelineStage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } } & {
              json: PipelineStagePatchInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId/audit': {
      $get:
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } }
            output: CollectionResponsePublicAuditInfoNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectType: string; pipelineId: string; stageId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
