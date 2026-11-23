import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFacesRoute,
  postFacesNameCreateRoute,
  postFacesNameDeleteRoute,
  postFacesNameReclassifyRoute,
  postFacesNameRegisterRoute,
  postFacesRecognizeRoute,
  postFacesReprocessRoute,
  postFacesTrainNameClassifyRoute,
  putFacesOldNameRenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const facesHandler = app
  .openapi(getFacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesReprocessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesTrainNameClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesRecognizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameReclassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFacesOldNameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
