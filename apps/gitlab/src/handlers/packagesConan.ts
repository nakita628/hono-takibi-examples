import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
  deleteApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
  deleteApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionRoute,
  deleteApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigestRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrlsRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDigestRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDownloadUrlsRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
  getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelSearchRoute,
  getApiV4PackagesConanV1ConansSearchRoute,
  getApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
  getApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
  getApiV4PackagesConanV1PingRoute,
  getApiV4PackagesConanV1UsersAuthenticateRoute,
  getApiV4PackagesConanV1UsersCheckCredentialsRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigestRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrlsRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDigestRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDownloadUrlsRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
  getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelSearchRoute,
  getApiV4ProjectsIdPackagesConanV1ConansSearchRoute,
  getApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
  getApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
  getApiV4ProjectsIdPackagesConanV1PingRoute,
  getApiV4ProjectsIdPackagesConanV1UsersAuthenticateRoute,
  getApiV4ProjectsIdPackagesConanV1UsersCheckCredentialsRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelLatestRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceLatestRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionSearchRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRoute,
  getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelSearchRoute,
  getApiV4ProjectsIdPackagesConanV2ConansSearchRoute,
  getApiV4ProjectsIdPackagesConanV2UsersAuthenticateRoute,
  getApiV4ProjectsIdPackagesConanV2UsersCheckCredentialsRoute,
  postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrlsRoute,
  postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrlsRoute,
  postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrlsRoute,
  postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrlsRoute,
  putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameAuthorizeRoute,
  putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
  putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameAuthorizeRoute,
  putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
  putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
  putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
  putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameRoute,
  putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesConanHandler = app
  .openapi(getApiV4ProjectsIdPackagesConanV2UsersAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesConanV2UsersCheckCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesConanV2ConansSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelSearchRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelLatestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionSearchRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceLatestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdPackagesConanV1UsersAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesConanV1UsersCheckCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesConanV1ConansSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelSearchRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdPackagesConanV1PingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDigestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDownloadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4PackagesConanV1UsersAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PackagesConanV1UsersCheckCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PackagesConanV1ConansSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelSearchRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4PackagesConanV1PingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDigestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDownloadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
