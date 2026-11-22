import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDiscriminatorWithMappingKey() {
  return ['discriminator-with-mapping'] as const
}

export function getDiscriminatorWithNoMappingKey() {
  return ['discriminator-with-no-mapping'] as const
}

export function getEmbeddedDiscriminatorKey() {
  return ['embedded-discriminator'] as const
}

export function getImproperDiscriminatorPlacementKey() {
  return ['improper-discriminator-placement'] as const
}

export function getMappingOfSchemaNamesKey() {
  return ['mapping-of-schema-names'] as const
}

export function getMappingWithDuplicateSchemasKey() {
  return ['mapping-with-duplicate-schemas'] as const
}

export function getNestedOneOfObjectWithNestedOneOfKey() {
  return ['nested-one-of-object-with-nested-one-of'] as const
}

export function getOneofAllofTopLevelDiscKey() {
  return ['oneof-allof-top-level-disc'] as const
}

export function getPotentiallyUndefinedFormDataKey() {
  return ['potentially-undefined-formData'] as const
}

export function getRedoclyFlavoredDiscriminatorKey() {
  return ['redocly-flavored-discriminator'] as const
}

export function getPatchDiscriminatorWithMappingKey() {
  return ['discriminator-with-mapping', '/discriminator-with-mapping', 'PATCH'] as const
}

export function usePatchDiscriminatorWithMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['discriminator-with-mapping']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['discriminator-with-mapping']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDiscriminatorWithMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['discriminator-with-mapping']['$patch']> },
      ) => parseResponse(client['discriminator-with-mapping'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDiscriminatorWithNoMappingKey() {
  return ['discriminator-with-no-mapping', '/discriminator-with-no-mapping', 'PATCH'] as const
}

export function usePatchDiscriminatorWithNoMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['discriminator-with-no-mapping']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['discriminator-with-no-mapping']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDiscriminatorWithNoMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['discriminator-with-no-mapping']['$patch']> },
      ) => parseResponse(client['discriminator-with-no-mapping'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEmbeddedDiscriminatorKey() {
  return ['embedded-discriminator', '/embedded-discriminator', 'PATCH'] as const
}

export function usePatchEmbeddedDiscriminator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['embedded-discriminator']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['embedded-discriminator']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmbeddedDiscriminatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['embedded-discriminator']['$patch']> },
      ) => parseResponse(client['embedded-discriminator'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOneofAllofTopLevelDiscKey() {
  return ['oneof-allof-top-level-disc', '/oneof-allof-top-level-disc', 'PATCH'] as const
}

export function usePatchOneofAllofTopLevelDisc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oneof-allof-top-level-disc']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oneof-allof-top-level-disc']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOneofAllofTopLevelDiscKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oneof-allof-top-level-disc']['$patch']> },
      ) => parseResponse(client['oneof-allof-top-level-disc'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNestedOneOfObjectWithNestedOneOfKey() {
  return [
    'nested-one-of-object-with-nested-one-of',
    '/nested-one-of-object-with-nested-one-of',
    'PATCH',
  ] as const
}

export function usePatchNestedOneOfObjectWithNestedOneOf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNestedOneOfObjectWithNestedOneOfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['nested-one-of-object-with-nested-one-of']['$patch']
          >
        },
      ) =>
        parseResponse(client['nested-one-of-object-with-nested-one-of'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMappingWithDuplicateSchemasKey() {
  return ['mapping-with-duplicate-schemas', '/mapping-with-duplicate-schemas', 'PATCH'] as const
}

export function usePatchMappingWithDuplicateSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMappingWithDuplicateSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['mapping-with-duplicate-schemas']['$patch']> },
      ) => parseResponse(client['mapping-with-duplicate-schemas'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMappingOfSchemaNamesKey() {
  return ['mapping-of-schema-names', '/mapping-of-schema-names', 'PATCH'] as const
}

export function usePatchMappingOfSchemaNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['mapping-of-schema-names']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['mapping-of-schema-names']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMappingOfSchemaNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['mapping-of-schema-names']['$patch']> },
      ) => parseResponse(client['mapping-of-schema-names'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchImproperDiscriminatorPlacementKey() {
  return ['improper-discriminator-placement', '/improper-discriminator-placement', 'PATCH'] as const
}

export function usePatchImproperDiscriminatorPlacement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['improper-discriminator-placement']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['improper-discriminator-placement']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchImproperDiscriminatorPlacementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['improper-discriminator-placement']['$patch']> },
      ) => parseResponse(client['improper-discriminator-placement'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRedoclyFlavoredDiscriminatorKey() {
  return ['redocly-flavored-discriminator', '/redocly-flavored-discriminator', 'PATCH'] as const
}

export function usePatchRedoclyFlavoredDiscriminator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['redocly-flavored-discriminator']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['redocly-flavored-discriminator']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRedoclyFlavoredDiscriminatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['redocly-flavored-discriminator']['$patch']> },
      ) => parseResponse(client['redocly-flavored-discriminator'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPotentiallyUndefinedFormDataKey() {
  return ['potentially-undefined-formData', '/potentially-undefined-formData', 'POST'] as const
}

export function usePostPotentiallyUndefinedFormData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['potentially-undefined-formData']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['potentially-undefined-formData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPotentiallyUndefinedFormDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['potentially-undefined-formData']['$post']> },
      ) => parseResponse(client['potentially-undefined-formData'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
