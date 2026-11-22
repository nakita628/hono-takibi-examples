import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCharactersIdAnimeRoute,
  getCharactersIdFullRoute,
  getCharactersIdMangaRoute,
  getCharactersIdPicturesRoute,
  getCharactersIdRoute,
  getCharactersIdVoicesRoute,
  getCharactersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const charactersHandler = app
  .openapi(getCharactersIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharactersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharactersIdAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharactersIdMangaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharactersIdVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharactersIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharactersRoute, (c) => {
    throw new Error('Not implemented')
  })
