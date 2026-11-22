import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDailyPapersRoute,
  getApiPapersPaperIdRoute,
  getApiPapersRoute,
  postApiPapersIndexRoute,
  postApiPapersPaperIdLinksRoute,
  postApiPapersPaperIdMediaRoute,
  postApiSettingsPapersClaimRoute,
} from '../routes'

const app = new OpenAPIHono()

export const papersHandler = app
  .openapi(postApiSettingsPapersClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDailyPapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPapersPaperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
