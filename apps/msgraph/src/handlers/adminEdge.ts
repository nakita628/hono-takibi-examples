import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminEdgeInternetExplorerModeRoute,
  deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute,
  deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
  deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
  deleteAdminEdgeRoute,
  getAdminEdgeInternetExplorerModeRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesCountRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesCountRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute,
  getAdminEdgeInternetExplorerModeSiteListsCountRoute,
  getAdminEdgeInternetExplorerModeSiteListsRoute,
  getAdminEdgeRoute,
  patchAdminEdgeInternetExplorerModeRoute,
  patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute,
  patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
  patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
  patchAdminEdgeRoute,
  postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdPublishRoute,
  postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute,
  postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute,
  postAdminEdgeInternetExplorerModeSiteListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminEdgeHandler = app
  .openapi(getAdminEdgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminEdgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminEdgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEdgeInternetExplorerModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminEdgeInternetExplorerModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminEdgeInternetExplorerModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEdgeInternetExplorerModeSiteListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEdgeInternetExplorerModeSiteListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEdgeInternetExplorerModeSiteListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
