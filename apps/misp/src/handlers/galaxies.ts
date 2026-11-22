import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGalaxiesDeleteGalaxyIdRoute,
  getGalaxiesRoute,
  getGalaxiesViewGalaxyIdRoute,
  postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute,
  postGalaxiesExportGalaxyIdRoute,
  postGalaxiesImportRoute,
  postGalaxiesRoute,
  postGalaxiesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const galaxiesHandler = app
  .openapi(getGalaxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGalaxiesViewGalaxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxiesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGalaxiesDeleteGalaxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxiesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxiesExportGalaxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
