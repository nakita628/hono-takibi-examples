import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePronunciationDictsIdRoute,
  getPronunciationDictsIdRoute,
  getPronunciationDictsRoute,
  patchPronunciationDictsIdRoute,
  postPronunciationDictsRoute,
} from '../routes'

export const getPronunciationDictsRouteHandler: RouteHandler<
  typeof getPronunciationDictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPronunciationDictsRouteHandler: RouteHandler<
  typeof postPronunciationDictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePronunciationDictsIdRouteHandler: RouteHandler<
  typeof deletePronunciationDictsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPronunciationDictsIdRouteHandler: RouteHandler<
  typeof getPronunciationDictsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPronunciationDictsIdRouteHandler: RouteHandler<
  typeof patchPronunciationDictsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
