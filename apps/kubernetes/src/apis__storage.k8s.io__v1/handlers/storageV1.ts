import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisStorageK8sIoV1CsidriversNameRoute,
  deleteApisStorageK8sIoV1CsidriversRoute,
  deleteApisStorageK8sIoV1CsinodesNameRoute,
  deleteApisStorageK8sIoV1CsinodesRoute,
  deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute,
  deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute,
  deleteApisStorageK8sIoV1StorageclassesNameRoute,
  deleteApisStorageK8sIoV1StorageclassesRoute,
  deleteApisStorageK8sIoV1VolumeattachmentsNameRoute,
  deleteApisStorageK8sIoV1VolumeattachmentsRoute,
  deleteApisStorageK8sIoV1VolumeattributesclassesNameRoute,
  deleteApisStorageK8sIoV1VolumeattributesclassesRoute,
  getApisStorageK8sIoV1CsidriversNameRoute,
  getApisStorageK8sIoV1CsidriversRoute,
  getApisStorageK8sIoV1CsinodesNameRoute,
  getApisStorageK8sIoV1CsinodesNameStatusRoute,
  getApisStorageK8sIoV1CsinodesRoute,
  getApisStorageK8sIoV1CsistoragecapacitiesRoute,
  getApisStorageK8sIoV1IndexRoute,
  getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute,
  getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute,
  getApisStorageK8sIoV1StorageclassesNameRoute,
  getApisStorageK8sIoV1StorageclassesRoute,
  getApisStorageK8sIoV1VolumeattachmentsNameRoute,
  getApisStorageK8sIoV1VolumeattachmentsNameStatusRoute,
  getApisStorageK8sIoV1VolumeattachmentsRoute,
  getApisStorageK8sIoV1VolumeattributesclassesNameRoute,
  getApisStorageK8sIoV1VolumeattributesclassesRoute,
  getApisStorageK8sIoV1WatchCsidriversNameRoute,
  getApisStorageK8sIoV1WatchCsidriversRoute,
  getApisStorageK8sIoV1WatchCsinodesNameRoute,
  getApisStorageK8sIoV1WatchCsinodesRoute,
  getApisStorageK8sIoV1WatchCsistoragecapacitiesRoute,
  getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameRoute,
  getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesRoute,
  getApisStorageK8sIoV1WatchStorageclassesNameRoute,
  getApisStorageK8sIoV1WatchStorageclassesRoute,
  getApisStorageK8sIoV1WatchVolumeattachmentsNameRoute,
  getApisStorageK8sIoV1WatchVolumeattachmentsRoute,
  getApisStorageK8sIoV1WatchVolumeattributesclassesNameRoute,
  getApisStorageK8sIoV1WatchVolumeattributesclassesRoute,
  patchApisStorageK8sIoV1CsidriversNameRoute,
  patchApisStorageK8sIoV1CsinodesNameRoute,
  patchApisStorageK8sIoV1CsinodesNameStatusRoute,
  patchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute,
  patchApisStorageK8sIoV1StorageclassesNameRoute,
  patchApisStorageK8sIoV1VolumeattachmentsNameRoute,
  patchApisStorageK8sIoV1VolumeattachmentsNameStatusRoute,
  patchApisStorageK8sIoV1VolumeattributesclassesNameRoute,
  postApisStorageK8sIoV1CsidriversRoute,
  postApisStorageK8sIoV1CsinodesRoute,
  postApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute,
  postApisStorageK8sIoV1StorageclassesRoute,
  postApisStorageK8sIoV1VolumeattachmentsRoute,
  postApisStorageK8sIoV1VolumeattributesclassesRoute,
  putApisStorageK8sIoV1CsidriversNameRoute,
  putApisStorageK8sIoV1CsinodesNameRoute,
  putApisStorageK8sIoV1CsinodesNameStatusRoute,
  putApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute,
  putApisStorageK8sIoV1StorageclassesNameRoute,
  putApisStorageK8sIoV1VolumeattachmentsNameRoute,
  putApisStorageK8sIoV1VolumeattachmentsNameStatusRoute,
  putApisStorageK8sIoV1VolumeattributesclassesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageV1Handler = app
  .openapi(getApisStorageK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1CsidriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1CsidriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStorageK8sIoV1CsidriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1CsidriversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1CsidriversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1CsidriversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1CsidriversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1CsinodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1CsinodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStorageK8sIoV1CsinodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1CsinodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1CsinodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1CsinodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1CsinodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1CsinodesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1CsinodesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1CsinodesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1CsistoragecapacitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1StorageclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1StorageclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStorageK8sIoV1StorageclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1StorageclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1StorageclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1StorageclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1StorageclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1VolumeattachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1VolumeattachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStorageK8sIoV1VolumeattachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1VolumeattachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1VolumeattachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1VolumeattachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1VolumeattachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1VolumeattachmentsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1VolumeattachmentsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1VolumeattachmentsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1VolumeattributesclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1VolumeattributesclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisStorageK8sIoV1VolumeattributesclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisStorageK8sIoV1VolumeattributesclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1VolumeattributesclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisStorageK8sIoV1VolumeattributesclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisStorageK8sIoV1VolumeattributesclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchCsidriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchCsidriversNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchCsinodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchCsinodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchCsistoragecapacitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchStorageclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchStorageclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchVolumeattachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchVolumeattachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchVolumeattributesclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisStorageK8sIoV1WatchVolumeattributesclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
