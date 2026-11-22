import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPeopleIdAnimeRoute,
  getPeopleIdFullRoute,
  getPeopleIdMangaRoute,
  getPeopleIdPicturesRoute,
  getPeopleIdRoute,
  getPeopleIdVoicesRoute,
  getPeopleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(getPeopleIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdMangaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
