import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAcceptDisputeRoute,
  postDefendDisputeRoute,
  postDeleteDisputeDefenseDocumentRoute,
  postRetrieveApplicableDefenseReasonsRoute,
  postSupplyDefenseDocumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postAcceptDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDefendDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteDisputeDefenseDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRetrieveApplicableDefenseReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSupplyDefenseDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
