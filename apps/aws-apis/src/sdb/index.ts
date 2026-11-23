import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchDeleteAttributesRoute,
  getActionBatchPutAttributesRoute,
  getActionCreateDomainRoute,
  getActionDeleteAttributesRoute,
  getActionDeleteDomainRoute,
  getActionDomainMetadataRoute,
  getActionGetAttributesRoute,
  getActionListDomainsRoute,
  getActionPutAttributesRoute,
  getActionSelectRoute,
  postActionBatchDeleteAttributesRoute,
  postActionBatchPutAttributesRoute,
  postActionCreateDomainRoute,
  postActionDeleteAttributesRoute,
  postActionDeleteDomainRoute,
  postActionDomainMetadataRoute,
  postActionGetAttributesRoute,
  postActionListDomainsRoute,
  postActionPutAttributesRoute,
  postActionSelectRoute,
} from './routes'
import {
  getActionBatchDeleteAttributesRouteHandler,
  getActionBatchPutAttributesRouteHandler,
  getActionCreateDomainRouteHandler,
  getActionDeleteAttributesRouteHandler,
  getActionDeleteDomainRouteHandler,
  getActionDomainMetadataRouteHandler,
  getActionGetAttributesRouteHandler,
  getActionListDomainsRouteHandler,
  getActionPutAttributesRouteHandler,
  getActionSelectRouteHandler,
  postActionBatchDeleteAttributesRouteHandler,
  postActionBatchPutAttributesRouteHandler,
  postActionCreateDomainRouteHandler,
  postActionDeleteAttributesRouteHandler,
  postActionDeleteDomainRouteHandler,
  postActionDomainMetadataRouteHandler,
  postActionGetAttributesRouteHandler,
  postActionListDomainsRouteHandler,
  postActionPutAttributesRouteHandler,
  postActionSelectRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionBatchDeleteAttributesRoute, getActionBatchDeleteAttributesRouteHandler)
  .openapi(postActionBatchDeleteAttributesRoute, postActionBatchDeleteAttributesRouteHandler)
  .openapi(getActionBatchPutAttributesRoute, getActionBatchPutAttributesRouteHandler)
  .openapi(postActionBatchPutAttributesRoute, postActionBatchPutAttributesRouteHandler)
  .openapi(getActionCreateDomainRoute, getActionCreateDomainRouteHandler)
  .openapi(postActionCreateDomainRoute, postActionCreateDomainRouteHandler)
  .openapi(getActionDeleteAttributesRoute, getActionDeleteAttributesRouteHandler)
  .openapi(postActionDeleteAttributesRoute, postActionDeleteAttributesRouteHandler)
  .openapi(getActionDeleteDomainRoute, getActionDeleteDomainRouteHandler)
  .openapi(postActionDeleteDomainRoute, postActionDeleteDomainRouteHandler)
  .openapi(getActionDomainMetadataRoute, getActionDomainMetadataRouteHandler)
  .openapi(postActionDomainMetadataRoute, postActionDomainMetadataRouteHandler)
  .openapi(getActionGetAttributesRoute, getActionGetAttributesRouteHandler)
  .openapi(postActionGetAttributesRoute, postActionGetAttributesRouteHandler)
  .openapi(getActionListDomainsRoute, getActionListDomainsRouteHandler)
  .openapi(postActionListDomainsRoute, postActionListDomainsRouteHandler)
  .openapi(getActionPutAttributesRoute, getActionPutAttributesRouteHandler)
  .openapi(postActionPutAttributesRoute, postActionPutAttributesRouteHandler)
  .openapi(getActionSelectRoute, getActionSelectRouteHandler)
  .openapi(postActionSelectRoute, postActionSelectRouteHandler)

export default app
