import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMapVersionNumberWmsIndex2Route,
  getMapVersionNumberWmsIndexRoute,
  getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wmswmtsHandler = app
  .openapi(getMapVersionNumberWmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberWmsIndex2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
