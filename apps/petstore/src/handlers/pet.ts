import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePetPetIdRoute,
  getPetFindByStatusRoute,
  getPetFindByTagsRoute,
  getPetPetIdRoute,
  postPetPetIdRoute,
  postPetPetIdUploadImageRoute,
  postPetRoute,
  putPetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const petHandler = app
  .openapi(putPetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPetFindByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPetFindByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPetPetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPetPetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePetPetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPetPetIdUploadImageRoute, (c) => {
    throw new Error('Not implemented')
  })
