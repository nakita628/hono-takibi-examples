import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4JobsIdSbomScansSbomDigestRoute,
  postApiV4JobsIdSbomScansAuthorizeRoute,
  postApiV4JobsIdSbomScansRoute,
  postApiV4JobsIdSbomScansSbomDigestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const softwareCompositionAnalysisHandler = app
  .openapi(postApiV4JobsIdSbomScansAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4JobsIdSbomScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4JobsIdSbomScansSbomDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4JobsIdSbomScansSbomDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
