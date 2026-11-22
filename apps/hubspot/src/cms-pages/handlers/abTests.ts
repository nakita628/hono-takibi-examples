import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsPages202609LandingPagesAbTestCreateVariationRoute,
  postCmsPages202609LandingPagesAbTestEndRoute,
  postCmsPages202609LandingPagesAbTestRerunRoute,
  postCmsPages202609SitePagesAbTestCreateVariationRoute,
  postCmsPages202609SitePagesAbTestEndRoute,
  postCmsPages202609SitePagesAbTestRerunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abTestsHandler = app
  .openapi(postCmsPages202609LandingPagesAbTestCreateVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesAbTestEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesAbTestRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesAbTestCreateVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesAbTestEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesAbTestRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
