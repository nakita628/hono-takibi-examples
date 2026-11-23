import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsBlogs202609AuthorsCursor(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.cursor.$get(args, options))
}

export async function getCmsBlogs202609AuthorsCursorQuery(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.cursor.query.$get(args, options))
}

export async function getCmsBlogs202609PostsCursor(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.cursor.$get(args, options))
}

export async function getCmsBlogs202609PostsCursorQuery(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.cursor.query.$get(args, options))
}

export async function getCmsBlogs202609Tags(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.$get(args, options))
}

export async function postCmsBlogs202609Tags(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.$post(args, options))
}

export async function postCmsBlogs202609TagsBatchArchive(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.batch.archive.$post(args, options))
}

export async function postCmsBlogs202609TagsBatchCreate(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.batch.create.$post(args, options))
}

export async function postCmsBlogs202609TagsBatchRead(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.batch.read.$post(args, options))
}

export async function postCmsBlogs202609TagsBatchUpdate(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.batch.update.$post(args, options))
}

export async function getCmsBlogs202609TagsCursor(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.cursor.$get(args, options))
}

export async function getCmsBlogs202609TagsCursorQuery(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.cursor.query.$get(args, options))
}

export async function postCmsBlogs202609TagsMultiLanguageAttachToLangGroup(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].tags['multi-language']['attach-to-lang-group'].$post(args, options),
  )
}

export async function postCmsBlogs202609TagsMultiLanguageCreateLanguageVariation(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].tags['multi-language']['create-language-variation'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609TagsMultiLanguageDetachFromLangGroup(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].tags['multi-language']['detach-from-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function putCmsBlogs202609TagsMultiLanguageSetNewLangPrimary(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].tags['multi-language']['set-new-lang-primary'].$put(args, options),
  )
}

export async function postCmsBlogs202609TagsMultiLanguageUpdateLanguages(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].tags['multi-language']['update-languages'].$post(args, options),
  )
}

export async function getCmsBlogs202609TagsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$get(args, options))
}

export async function deleteCmsBlogs202609TagsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$delete(args, options))
}

export async function patchCmsBlogs202609TagsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$patch(args, options))
}
