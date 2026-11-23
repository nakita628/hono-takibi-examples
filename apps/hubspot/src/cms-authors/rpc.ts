import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsBlogs202609Authors(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.$get(args, options))
}

export async function postCmsBlogs202609Authors(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.$post(args, options))
}

export async function postCmsBlogs202609AuthorsBatchArchive(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.batch.archive.$post(args, options))
}

export async function postCmsBlogs202609AuthorsBatchCreate(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.batch.create.$post(args, options))
}

export async function postCmsBlogs202609AuthorsBatchRead(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.batch.read.$post(args, options))
}

export async function postCmsBlogs202609AuthorsBatchUpdate(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.batch.update.$post(args, options))
}

export async function postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroup(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].authors['multi-language']['attach-to-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariation(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].authors['multi-language']['create-language-variation'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroup(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].authors['multi-language']['detach-from-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimary(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].authors['multi-language']['set-new-lang-primary'].$put(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609AuthorsMultiLanguageUpdateLanguages(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].authors['multi-language']['update-languages'].$post(args, options),
  )
}

export async function getCmsBlogs202609AuthorsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$get(args, options))
}

export async function deleteCmsBlogs202609AuthorsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].authors[':objectId'].$delete(args, options),
  )
}

export async function patchCmsBlogs202609AuthorsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$patch(args, options))
}
