import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdCollaboratorsStoryCollaboratorUseridRoute,
  getIdCollaboratorsRoute,
  getIdCollaboratorsStoryCollaboratorUseridRoute,
  postIdCollaboratorsInactiveRoute,
  postIdCollaboratorsRoute,
  putIdCollaboratorsStoryCollaboratorUseridRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storyCollaboratorsHandler = app
  .openapi(getIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdCollaboratorsInactiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdCollaboratorsStoryCollaboratorUseridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdCollaboratorsStoryCollaboratorUseridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIdCollaboratorsStoryCollaboratorUseridRoute, (c) => {
    throw new Error('Not implemented')
  })
