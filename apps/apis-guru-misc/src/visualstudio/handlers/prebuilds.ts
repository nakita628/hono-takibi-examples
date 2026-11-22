import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PrebuildsTemplateEnvironmentIdRoute,
  getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRoute,
  postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRoute,
  postApiV1GenevaActionsPrebuildsPoolsDeleteRoute,
  postApiV1PrebuildsPoolsPoolIdInstancesRoute,
  putApiV1PrebuildsPoolsPoolIdInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prebuildsHandler = app
  .openapi(postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPrebuildsPoolsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PrebuildsPoolsPoolIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PrebuildsPoolsPoolIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PrebuildsTemplateEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
