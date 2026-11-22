import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillRoute,
  postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersRoute,
  postAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersRoute,
  postApiCheckoutPubOrderFormsSimulationRoute,
  postPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdRoute,
  postPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterRoute,
  putAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalMarketplaceHandler = app
  .openapi(postApiCheckoutPubOrderFormsSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountNameVtexcommercestableComBrApiOrderIntegrationOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountNameEnvironmentComBrApiFulfillmentPvtOrdersOrderIdFulfillRoute, (c) => {
    throw new Error('Not implemented')
  })
