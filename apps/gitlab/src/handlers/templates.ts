import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4TemplatesDockerfilesNameRoute,
  getApiV4TemplatesDockerfilesRoute,
  getApiV4TemplatesGitignoresNameRoute,
  getApiV4TemplatesGitignoresRoute,
  getApiV4TemplatesGitlabCiYmlsNameRoute,
  getApiV4TemplatesGitlabCiYmlsRoute,
  getApiV4TemplatesLicensesNameRoute,
  getApiV4TemplatesLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getApiV4TemplatesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesLicensesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesGitignoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesGitignoresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesGitlabCiYmlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesGitlabCiYmlsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesDockerfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TemplatesDockerfilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
