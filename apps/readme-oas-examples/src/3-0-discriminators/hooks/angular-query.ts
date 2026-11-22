import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPatchDiscriminatorWithMappingMutationKey() {
  return ['discriminator-with-mapping', '/discriminator-with-mapping', 'PATCH'] as const
}

export function getPatchDiscriminatorWithMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['discriminator-with-mapping']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['discriminator-with-mapping']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDiscriminatorWithMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['discriminator-with-mapping']['$patch']>,
    ) {
      return parseResponse(client['discriminator-with-mapping'].$patch(args, options))
    },
  })
}

export function injectPatchDiscriminatorWithMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['discriminator-with-mapping']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['discriminator-with-mapping']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDiscriminatorWithMappingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchDiscriminatorWithNoMappingMutationKey() {
  return ['discriminator-with-no-mapping', '/discriminator-with-no-mapping', 'PATCH'] as const
}

export function getPatchDiscriminatorWithNoMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['discriminator-with-no-mapping']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['discriminator-with-no-mapping']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDiscriminatorWithNoMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['discriminator-with-no-mapping']['$patch']>,
    ) {
      return parseResponse(client['discriminator-with-no-mapping'].$patch(args, options))
    },
  })
}

export function injectPatchDiscriminatorWithNoMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['discriminator-with-no-mapping']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['discriminator-with-no-mapping']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDiscriminatorWithNoMappingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmbeddedDiscriminatorMutationKey() {
  return ['embedded-discriminator', '/embedded-discriminator', 'PATCH'] as const
}

export function getPatchEmbeddedDiscriminatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['embedded-discriminator']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['embedded-discriminator']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmbeddedDiscriminatorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['embedded-discriminator']['$patch']>) {
      return parseResponse(client['embedded-discriminator'].$patch(args, options))
    },
  })
}

export function injectPatchEmbeddedDiscriminator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['embedded-discriminator']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['embedded-discriminator']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmbeddedDiscriminatorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOneofAllofTopLevelDiscMutationKey() {
  return ['oneof-allof-top-level-disc', '/oneof-allof-top-level-disc', 'PATCH'] as const
}

export function getPatchOneofAllofTopLevelDiscMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oneof-allof-top-level-disc']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['oneof-allof-top-level-disc']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOneofAllofTopLevelDiscMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['oneof-allof-top-level-disc']['$patch']>,
    ) {
      return parseResponse(client['oneof-allof-top-level-disc'].$patch(args, options))
    },
  })
}

export function injectPatchOneofAllofTopLevelDisc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oneof-allof-top-level-disc']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oneof-allof-top-level-disc']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOneofAllofTopLevelDiscMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchNestedOneOfObjectWithNestedOneOfMutationKey() {
  return [
    'nested-one-of-object-with-nested-one-of',
    '/nested-one-of-object-with-nested-one-of',
    'PATCH',
  ] as const
}

export function getPatchNestedOneOfObjectWithNestedOneOfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNestedOneOfObjectWithNestedOneOfMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>,
    ) {
      return parseResponse(client['nested-one-of-object-with-nested-one-of'].$patch(args, options))
    },
  })
}

export function injectPatchNestedOneOfObjectWithNestedOneOf<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['nested-one-of-object-with-nested-one-of']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNestedOneOfObjectWithNestedOneOfMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchMappingWithDuplicateSchemasMutationKey() {
  return ['mapping-with-duplicate-schemas', '/mapping-with-duplicate-schemas', 'PATCH'] as const
}

export function getPatchMappingWithDuplicateSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMappingWithDuplicateSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>,
    ) {
      return parseResponse(client['mapping-with-duplicate-schemas'].$patch(args, options))
    },
  })
}

export function injectPatchMappingWithDuplicateSchemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['mapping-with-duplicate-schemas']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMappingWithDuplicateSchemasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchMappingOfSchemaNamesMutationKey() {
  return ['mapping-of-schema-names', '/mapping-of-schema-names', 'PATCH'] as const
}

export function getPatchMappingOfSchemaNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['mapping-of-schema-names']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['mapping-of-schema-names']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMappingOfSchemaNamesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['mapping-of-schema-names']['$patch']>) {
      return parseResponse(client['mapping-of-schema-names'].$patch(args, options))
    },
  })
}

export function injectPatchMappingOfSchemaNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['mapping-of-schema-names']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['mapping-of-schema-names']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMappingOfSchemaNamesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchImproperDiscriminatorPlacementMutationKey() {
  return ['improper-discriminator-placement', '/improper-discriminator-placement', 'PATCH'] as const
}

export function getPatchImproperDiscriminatorPlacementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['improper-discriminator-placement']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['improper-discriminator-placement']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchImproperDiscriminatorPlacementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['improper-discriminator-placement']['$patch']>,
    ) {
      return parseResponse(client['improper-discriminator-placement'].$patch(args, options))
    },
  })
}

export function injectPatchImproperDiscriminatorPlacement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['improper-discriminator-placement']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['improper-discriminator-placement']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchImproperDiscriminatorPlacementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRedoclyFlavoredDiscriminatorMutationKey() {
  return ['redocly-flavored-discriminator', '/redocly-flavored-discriminator', 'PATCH'] as const
}

export function getPatchRedoclyFlavoredDiscriminatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['redocly-flavored-discriminator']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['redocly-flavored-discriminator']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRedoclyFlavoredDiscriminatorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['redocly-flavored-discriminator']['$patch']>,
    ) {
      return parseResponse(client['redocly-flavored-discriminator'].$patch(args, options))
    },
  })
}

export function injectPatchRedoclyFlavoredDiscriminator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['redocly-flavored-discriminator']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['redocly-flavored-discriminator']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRedoclyFlavoredDiscriminatorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPotentiallyUndefinedFormDataMutationKey() {
  return ['potentially-undefined-formData', '/potentially-undefined-formData', 'POST'] as const
}

export function getPostPotentiallyUndefinedFormDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['potentially-undefined-formData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['potentially-undefined-formData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPotentiallyUndefinedFormDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['potentially-undefined-formData']['$post']>,
    ) {
      return parseResponse(client['potentially-undefined-formData'].$post(args, options))
    },
  })
}

export function injectPostPotentiallyUndefinedFormData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['potentially-undefined-formData']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['potentially-undefined-formData']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPotentiallyUndefinedFormDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
