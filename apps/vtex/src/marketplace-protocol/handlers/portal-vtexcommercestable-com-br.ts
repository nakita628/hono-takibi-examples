import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdRoute,
  postPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portalVtexcommercestableComBrHandler = app
  .openapi(
    postPortalVtexcommercestableComBrApiMkpCategoryMapperCategoriesMarketplaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postPortalVtexcommercestableComBrApiMkpCategoryMapperConnectorRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
