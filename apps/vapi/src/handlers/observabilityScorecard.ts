import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteObservabilityScorecardIdRoute,
  getObservabilityScorecardIdRoute,
  getObservabilityScorecardRoute,
  patchObservabilityScorecardIdRoute,
  postObservabilityScorecardRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observabilityScorecardHandler = app
  .openapi(getObservabilityScorecardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchObservabilityScorecardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObservabilityScorecardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObservabilityScorecardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObservabilityScorecardRoute, (c) => {
    throw new Error('Not implemented')
  })
