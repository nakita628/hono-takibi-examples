import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMapVersionNumberCopyrightsFormat(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map[':versionNumber']['copyrights.:format'].$get(args, options))
}

export async function getMapVersionNumberCopyrightsCaptionFormat(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.map[':versionNumber'].copyrights['caption.:format'].$get(args, options),
  )
}

export async function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.map[':versionNumber'].copyrights[':minLon'][':minLat'][':maxLon'][
      ':maxLat.:format'
    ].$get(args, options),
  )
}

export async function getMapVersionNumberCopyrightsZoomXYFormat(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.:format'].$get(args, options),
  )
}

export async function getMapVersionNumberStaticimage(
  args: InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map[':versionNumber'].staticimage.$get(args, options))
}

export async function getMapVersionNumberTileLayerStyleZoomXYPbf(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.pbf'].$get(
      args,
      options,
    ),
  )
}

export async function getMapVersionNumberTileLayerStyleZoomXYFormat(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.:format'].$get(
      args,
      options,
    ),
  )
}

export async function getMapVersionNumberWmsIndex(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map[':versionNumber'].wms.index.$get(args, options))
}

export async function getMapVersionNumberWmsIndex2(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map[':versionNumber'].wms.index.$get(args, options))
}

export async function getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXml(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.map[':versionNumber'].wmts[':key'][':wmtsVersion']['WMTSCapabilities.xml'].$get(
      args,
      options,
    ),
  )
}
