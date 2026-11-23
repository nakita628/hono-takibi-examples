import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchDeveloperRoute,
  getSearchGovRoute,
  getSearchResearchPapersIdRoute,
  getSearchResearchPapersIdSimilarRoute,
  getSearchResearchPapersRoute,
  postSearchDeveloperRoute,
  postSearchGovRoute,
  postSearchJobIdFeedbackRoute,
  postSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchJobIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchResearchPapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchResearchPapersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchResearchPapersIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchDeveloperRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchDeveloperRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchGovRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchGovRoute, (c) => {
    throw new Error('Not implemented')
  })
