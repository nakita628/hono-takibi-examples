import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmDealsIdRoute,
  getCrmAttributesDealsRoute,
  getCrmDealsIdRoute,
  getCrmDealsRoute,
  getCrmPipelineDetailsAllRoute,
  getCrmPipelineDetailsPipelineIDRoute,
  getCrmPipelineDetailsRoute,
  patchCrmDealsIdRoute,
  patchCrmDealsLinkUnlinkIdRoute,
  postCrmDealsImportRoute,
  postCrmDealsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dealsHandler = app
  .openapi(getCrmAttributesDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmDealsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmDealsLinkUnlinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmDealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmDealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmDealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelineDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelineDetailsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelineDetailsPipelineIDRoute, (c) => {
    throw new Error('Not implemented')
  })
