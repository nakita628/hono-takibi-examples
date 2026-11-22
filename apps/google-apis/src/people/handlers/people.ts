import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ResourceNameDeleteContactPhotoRoute,
  deleteV1ResourceNameDeleteContactRoute,
  getV1PeopleBatchGetRoute,
  getV1PeopleListDirectoryPeopleRoute,
  getV1PeopleSearchContactsRoute,
  getV1PeopleSearchDirectoryPeopleRoute,
  getV1ResourceNameConnectionsRoute,
  getV1ResourceNameRoute,
  patchV1ResourceNameUpdateContactPhotoRoute,
  patchV1ResourceNameUpdateContactRoute,
  postV1PeopleBatchCreateContactsRoute,
  postV1PeopleBatchDeleteContactsRoute,
  postV1PeopleBatchUpdateContactsRoute,
  postV1PeopleCreateContactRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(postV1PeopleBatchCreateContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleBatchDeleteContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleBatchUpdateContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleCreateContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleListDirectoryPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleSearchContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleSearchDirectoryPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResourceNameDeleteContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResourceNameDeleteContactPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ResourceNameUpdateContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ResourceNameUpdateContactPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
