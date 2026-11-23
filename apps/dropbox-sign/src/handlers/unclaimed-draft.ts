import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUnclaimedDraftCreateEmbeddedRoute,
  postUnclaimedDraftCreateEmbeddedWithTemplateRoute,
  postUnclaimedDraftCreateRoute,
  postUnclaimedDraftEditAndResendSignatureRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unclaimedDraftHandler = app
  .openapi(postUnclaimedDraftCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnclaimedDraftCreateEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnclaimedDraftCreateEmbeddedWithTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnclaimedDraftEditAndResendSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
