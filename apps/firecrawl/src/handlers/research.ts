import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchResearchPapersIdRoute,
  getSearchResearchPapersIdSimilarRoute,
  getSearchResearchPapersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const researchHandler = app
  .openapi(getSearchResearchPapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchResearchPapersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchResearchPapersIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
