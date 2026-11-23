import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTechniquesTechniqueIdTechniqueVersionRoute,
  getTechniquesCategoriesRoute,
  getTechniquesRoute,
  getTechniquesTechniqueIdDirectivesRoute,
  getTechniquesTechniqueIdRoute,
  getTechniquesTechniqueIdTechniqueVersionDirectivesRoute,
  getTechniquesTechniqueIdTechniqueVersionResourcesRoute,
  getTechniquesTechniqueIdTechniqueVersionRevisionsRoute,
  getTechniquesTechniqueIdTechniqueVersionRoute,
  getTechniquesVersionsRoute,
  postTechniquesReloadRoute,
  postTechniquesTechniqueIdTechniqueVersionRoute,
  putTechniquesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const techniquesHandler = app
  .openapi(getTechniquesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTechniquesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTechniquesReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesTechniqueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesTechniqueIdDirectivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTechniquesTechniqueIdTechniqueVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesTechniqueIdTechniqueVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTechniquesTechniqueIdTechniqueVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesTechniqueIdTechniqueVersionDirectivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesTechniqueIdTechniqueVersionResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechniquesTechniqueIdTechniqueVersionRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
