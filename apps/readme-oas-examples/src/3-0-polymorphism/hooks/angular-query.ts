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

export function getAnyOfWithTypeKey() {
  return ['any-of-with-type'] as const
}

export function getAnythingKey() {
  return ['anything'] as const
}

export function getOneOfComplexKey() {
  return ['one-of-complex'] as const
}

export function getOneOfWithTypeKey() {
  return ['one-of-with-type'] as const
}

export function getPetsKey() {
  return ['pets'] as const
}

export function getPatchPetsMutationKey() {
  return ['pets', '/pets', 'PATCH'] as const
}

export function getPatchPetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$patch>>>>>,
    TError,
    InferRequestType<typeof client.pets.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pets.$patch>) {
      return parseResponse(client.pets.$patch(args, options))
    },
  })
}

export function injectPatchPets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$patch>>>>>,
        TError,
        InferRequestType<typeof client.pets.$patch>,
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
    const mutationDefaults = getPatchPetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingAllOfObjectMutationKey() {
  return ['anything', '/anything/all-of-object', 'POST'] as const
}

export function getPostAnythingAllOfObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['all-of-object']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['all-of-object']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingAllOfObjectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['all-of-object']['$post']>) {
      return parseResponse(client.anything['all-of-object'].$post(args, options))
    },
  })
}

export function injectPostAnythingAllOfObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['all-of-object']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['all-of-object']['$post']>,
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
    const mutationDefaults = getPostAnythingAllOfObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingAnyOfObjectMutationKey() {
  return ['anything', '/anything/any-of-object', 'POST'] as const
}

export function getPostAnythingAnyOfObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['any-of-object']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['any-of-object']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingAnyOfObjectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['any-of-object']['$post']>) {
      return parseResponse(client.anything['any-of-object'].$post(args, options))
    },
  })
}

export function injectPostAnythingAnyOfObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['any-of-object']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['any-of-object']['$post']>,
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
    const mutationDefaults = getPostAnythingAnyOfObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingAnyOfPrimitiveMutationKey() {
  return ['anything', '/anything/any-of-primitive', 'POST'] as const
}

export function getPostAnythingAnyOfPrimitiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['any-of-primitive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['any-of-primitive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingAnyOfPrimitiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['any-of-primitive']['$post']>,
    ) {
      return parseResponse(client.anything['any-of-primitive'].$post(args, options))
    },
  })
}

export function injectPostAnythingAnyOfPrimitive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['any-of-primitive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['any-of-primitive']['$post']>,
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
    const mutationDefaults = getPostAnythingAnyOfPrimitiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnyOfWithTypeMutationKey() {
  return ['any-of-with-type', '/any-of-with-type', 'POST'] as const
}

export function getPostAnyOfWithTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['any-of-with-type']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['any-of-with-type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnyOfWithTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['any-of-with-type']['$post']>) {
      return parseResponse(client['any-of-with-type'].$post(args, options))
    },
  })
}

export function injectPostAnyOfWithType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['any-of-with-type']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['any-of-with-type']['$post']>,
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
    const mutationDefaults = getPostAnyOfWithTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingOneOfObjectMutationKey() {
  return ['anything', '/anything/one-of-object', 'POST'] as const
}

export function getPostAnythingOneOfObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['one-of-object']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['one-of-object']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingOneOfObjectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['one-of-object']['$post']>) {
      return parseResponse(client.anything['one-of-object'].$post(args, options))
    },
  })
}

export function injectPostAnythingOneOfObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['one-of-object']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['one-of-object']['$post']>,
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
    const mutationDefaults = getPostAnythingOneOfObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingOneOfPrimitiveMutationKey() {
  return ['anything', '/anything/one-of-primitive', 'POST'] as const
}

export function getPostAnythingOneOfPrimitiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['one-of-primitive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['one-of-primitive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingOneOfPrimitiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['one-of-primitive']['$post']>,
    ) {
      return parseResponse(client.anything['one-of-primitive'].$post(args, options))
    },
  })
}

export function injectPostAnythingOneOfPrimitive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['one-of-primitive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['one-of-primitive']['$post']>,
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
    const mutationDefaults = getPostAnythingOneOfPrimitiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingOneOfObjectRefMutationKey() {
  return ['anything', '/anything/one-of-object-ref', 'POST'] as const
}

export function getPostAnythingOneOfObjectRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['one-of-object-ref']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['one-of-object-ref']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingOneOfObjectRefMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['one-of-object-ref']['$post']>,
    ) {
      return parseResponse(client.anything['one-of-object-ref'].$post(args, options))
    },
  })
}

export function injectPostAnythingOneOfObjectRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['one-of-object-ref']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['one-of-object-ref']['$post']>,
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
    const mutationDefaults = getPostAnythingOneOfObjectRefMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOneOfComplexMutationKey() {
  return ['one-of-complex', '/one-of-complex', 'POST'] as const
}

export function getPostOneOfComplexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['one-of-complex']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['one-of-complex']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOneOfComplexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['one-of-complex']['$post']>) {
      return parseResponse(client['one-of-complex'].$post(args, options))
    },
  })
}

export function injectPostOneOfComplex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['one-of-complex']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['one-of-complex']['$post']>,
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
    const mutationDefaults = getPostOneOfComplexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingNestedOneOfObjectRefMutationKey() {
  return ['anything', '/anything/nested-one-of-object-ref', 'POST'] as const
}

export function getPostAnythingNestedOneOfObjectRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['nested-one-of-object-ref']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['nested-one-of-object-ref']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingNestedOneOfObjectRefMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['nested-one-of-object-ref']['$post']>,
    ) {
      return parseResponse(client.anything['nested-one-of-object-ref'].$post(args, options))
    },
  })
}

export function injectPostAnythingNestedOneOfObjectRef<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['nested-one-of-object-ref']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['nested-one-of-object-ref']['$post']>,
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
    const mutationDefaults = getPostAnythingNestedOneOfObjectRefMutationOptions<
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

export function getPostAnythingNestedOneOfRefMutationKey() {
  return ['anything', '/anything/nested-one-of-ref', 'POST'] as const
}

export function getPostAnythingNestedOneOfRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['nested-one-of-ref']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['nested-one-of-ref']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingNestedOneOfRefMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['nested-one-of-ref']['$post']>,
    ) {
      return parseResponse(client.anything['nested-one-of-ref'].$post(args, options))
    },
  })
}

export function injectPostAnythingNestedOneOfRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['nested-one-of-ref']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['nested-one-of-ref']['$post']>,
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
    const mutationDefaults = getPostAnythingNestedOneOfRefMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingNestedOneOfObjectWithNestedOneOfMutationKey() {
  return ['anything', '/anything/nested-one-of-object-with-nested-one-of', 'POST'] as const
}

export function getPostAnythingNestedOneOfObjectWithNestedOneOfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingNestedOneOfObjectWithNestedOneOfMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']
      >,
    ) {
      return parseResponse(
        client.anything['nested-one-of-object-with-nested-one-of'].$post(args, options),
      )
    },
  })
}

export function injectPostAnythingNestedOneOfObjectWithNestedOneOf<
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
                ReturnType<
                  (typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']
        >,
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
    const mutationDefaults = getPostAnythingNestedOneOfObjectWithNestedOneOfMutationOptions<
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

export function getPostOneOfWithTypeMutationKey() {
  return ['one-of-with-type', '/one-of-with-type', 'POST'] as const
}

export function getPostOneOfWithTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['one-of-with-type']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['one-of-with-type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOneOfWithTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['one-of-with-type']['$post']>) {
      return parseResponse(client['one-of-with-type'].$post(args, options))
    },
  })
}

export function injectPostOneOfWithType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['one-of-with-type']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['one-of-with-type']['$post']>,
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
    const mutationDefaults = getPostOneOfWithTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
