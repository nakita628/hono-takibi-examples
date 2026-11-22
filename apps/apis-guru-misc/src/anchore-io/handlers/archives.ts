import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteArchivesImagesImageDigestRoute,
  deleteArchivesRulesRuleIdRoute,
  getArchivesImagesImageDigestRoute,
  getArchivesImagesRoute,
  getArchivesRoute,
  getArchivesRulesRoute,
  getArchivesRulesRuleIdRoute,
  postArchivesImagesRoute,
  postArchivesRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const archivesHandler = app
  .openapi(getArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchivesImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArchivesImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteArchivesImagesImageDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchivesImagesImageDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchivesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArchivesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteArchivesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchivesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
