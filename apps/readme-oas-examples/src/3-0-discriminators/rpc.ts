import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchDiscriminatorWithMapping(
  args: InferRequestType<(typeof client)['discriminator-with-mapping']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discriminator-with-mapping'].$patch(args, options))
}

export async function patchDiscriminatorWithNoMapping(
  args: InferRequestType<(typeof client)['discriminator-with-no-mapping']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discriminator-with-no-mapping'].$patch(args, options))
}

export async function patchEmbeddedDiscriminator(
  args: InferRequestType<(typeof client)['embedded-discriminator']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['embedded-discriminator'].$patch(args, options))
}

export async function patchOneofAllofTopLevelDisc(
  args: InferRequestType<(typeof client)['oneof-allof-top-level-disc']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oneof-allof-top-level-disc'].$patch(args, options))
}

export async function patchNestedOneOfObjectWithNestedOneOf(
  args: InferRequestType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['nested-one-of-object-with-nested-one-of'].$patch(args, options),
  )
}

export async function patchMappingWithDuplicateSchemas(
  args: InferRequestType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['mapping-with-duplicate-schemas'].$patch(args, options))
}

export async function patchMappingOfSchemaNames(
  args: InferRequestType<(typeof client)['mapping-of-schema-names']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['mapping-of-schema-names'].$patch(args, options))
}

export async function patchImproperDiscriminatorPlacement(
  args: InferRequestType<(typeof client)['improper-discriminator-placement']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['improper-discriminator-placement'].$patch(args, options))
}

export async function patchRedoclyFlavoredDiscriminator(
  args: InferRequestType<(typeof client)['redocly-flavored-discriminator']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['redocly-flavored-discriminator'].$patch(args, options))
}

export async function postPotentiallyUndefinedFormData(
  args: InferRequestType<(typeof client)['potentially-undefined-formData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['potentially-undefined-formData'].$post(args, options))
}
