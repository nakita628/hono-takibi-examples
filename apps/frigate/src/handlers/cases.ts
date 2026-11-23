import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCasesCaseIdRoute,
  getCasesCaseIdDownloadRoute,
  getCasesCaseIdRoute,
  getCasesRoute,
  patchCasesCaseIdRoute,
  postCasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const casesHandler = app
  .openapi(getCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCasesCaseIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
