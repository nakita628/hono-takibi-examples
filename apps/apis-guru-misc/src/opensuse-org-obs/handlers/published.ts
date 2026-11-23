import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRoute,
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRoute,
  getPublishedProjectNameRepositoryNameArchitectureNameRoute,
  getPublishedProjectNameRepositoryNameRoute,
  getPublishedProjectNameRepositoryNameViewStatusRoute,
  getPublishedProjectNameRoute,
  getPublishedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publishedHandler = app
  .openapi(getPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishedProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishedProjectNameRepositoryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishedProjectNameRepositoryNameArchitectureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishedProjectNameRepositoryNameViewStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
