import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePetPetIdRoute,
  getPetFindByStatusRoute,
  getPetFindByTagsRoute,
  getPetPetIdRoute,
  postPetPetIdRoute,
  postPetPetIdUploadImageRoute,
  postPetRoute,
  putPetRoute,
} from '../routes'

export const putPetRouteHandler: RouteHandler<typeof putPetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPetRouteHandler: RouteHandler<typeof postPetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPetFindByStatusRouteHandler: RouteHandler<typeof getPetFindByStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPetFindByTagsRouteHandler: RouteHandler<typeof getPetFindByTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPetPetIdRouteHandler: RouteHandler<typeof getPetPetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPetPetIdRouteHandler: RouteHandler<typeof postPetPetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePetPetIdRouteHandler: RouteHandler<typeof deletePetPetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPetPetIdUploadImageRouteHandler: RouteHandler<
  typeof postPetPetIdUploadImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
