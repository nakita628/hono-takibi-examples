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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getPutAnythingStringsMutationKey() {
  return ['anything', '/anything/strings', 'PUT'] as const
}

export function getPutAnythingStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.strings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.strings.$put>) {
      return parseResponse(client.anything.strings.$put(args, options))
    },
  })
}

export function injectPutAnythingStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.anything.strings.$put>,
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
    const mutationDefaults = getPutAnythingStringsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingStringsMutationKey() {
  return ['anything', '/anything/strings', 'POST'] as const
}

export function getPostAnythingStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.strings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.strings.$post>) {
      return parseResponse(client.anything.strings.$post(args, options))
    },
  })
}

export function injectPostAnythingStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.strings.$post>,
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
    const mutationDefaults = getPostAnythingStringsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingStringsTopLevelPayloadsMutationKey() {
  return ['anything', '/anything/strings/top-level-payloads', 'POST'] as const
}

export function getPostAnythingStringsTopLevelPayloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.strings)['top-level-payloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingStringsTopLevelPayloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$post']>,
    ) {
      return parseResponse(client.anything.strings['top-level-payloads'].$post(args, options))
    },
  })
}

export function injectPostAnythingStringsTopLevelPayloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything.strings)['top-level-payloads']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$post']>,
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
    const mutationDefaults = getPostAnythingStringsTopLevelPayloadsMutationOptions<
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

export function getPatchAnythingStringsTopLevelPayloadsMutationKey() {
  return ['anything', '/anything/strings/top-level-payloads', 'PATCH'] as const
}

export function getPatchAnythingStringsTopLevelPayloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.strings)['top-level-payloads']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingStringsTopLevelPayloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$patch']>,
    ) {
      return parseResponse(client.anything.strings['top-level-payloads'].$patch(args, options))
    },
  })
}

export function injectPatchAnythingStringsTopLevelPayloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything.strings)['top-level-payloads']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$patch']>,
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
    const mutationDefaults = getPatchAnythingStringsTopLevelPayloadsMutationOptions<
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

export function getPutAnythingNumbersMutationKey() {
  return ['anything', '/anything/numbers', 'PUT'] as const
}

export function getPutAnythingNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.numbers.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingNumbersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.numbers.$put>) {
      return parseResponse(client.anything.numbers.$put(args, options))
    },
  })
}

export function injectPutAnythingNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.anything.numbers.$put>,
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
    const mutationDefaults = getPutAnythingNumbersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingNumbersMutationKey() {
  return ['anything', '/anything/numbers', 'POST'] as const
}

export function getPostAnythingNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.numbers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingNumbersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.numbers.$post>) {
      return parseResponse(client.anything.numbers.$post(args, options))
    },
  })
}

export function injectPostAnythingNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.numbers.$post>,
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
    const mutationDefaults = getPostAnythingNumbersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAnythingNumbersMutationKey() {
  return ['anything', '/anything/numbers', 'PATCH'] as const
}

export function getPatchAnythingNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.numbers.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingNumbersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.numbers.$patch>) {
      return parseResponse(client.anything.numbers.$patch(args, options))
    },
  })
}

export function injectPatchAnythingNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.numbers.$patch>,
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
    const mutationDefaults = getPatchAnythingNumbersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingBooleansMutationKey() {
  return ['anything', '/anything/booleans', 'POST'] as const
}

export function getPostAnythingBooleansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.booleans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingBooleansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.booleans.$post>) {
      return parseResponse(client.anything.booleans.$post(args, options))
    },
  })
}

export function injectPostAnythingBooleans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.booleans.$post>,
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
    const mutationDefaults = getPostAnythingBooleansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAnythingBooleansMutationKey() {
  return ['anything', '/anything/booleans', 'PATCH'] as const
}

export function getPatchAnythingBooleansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.booleans.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingBooleansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.booleans.$patch>) {
      return parseResponse(client.anything.booleans.$patch(args, options))
    },
  })
}

export function injectPatchAnythingBooleans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.booleans.$patch>,
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
    const mutationDefaults = getPatchAnythingBooleansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingArraysMutationKey() {
  return ['anything', '/anything/arrays', 'POST'] as const
}

export function getPostAnythingArraysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.arrays.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.arrays.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingArraysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.arrays.$post>) {
      return parseResponse(client.anything.arrays.$post(args, options))
    },
  })
}

export function injectPostAnythingArrays<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.arrays.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.anything.arrays.$post>,
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
    const mutationDefaults = getPostAnythingArraysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingArraysTopLevelPayloadsMutationKey() {
  return ['anything', '/anything/arrays/top-level-payloads', 'POST'] as const
}

export function getPostAnythingArraysTopLevelPayloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.arrays)['top-level-payloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingArraysTopLevelPayloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$post']>,
    ) {
      return parseResponse(client.anything.arrays['top-level-payloads'].$post(args, options))
    },
  })
}

export function injectPostAnythingArraysTopLevelPayloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything.arrays)['top-level-payloads']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$post']>,
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
    const mutationDefaults = getPostAnythingArraysTopLevelPayloadsMutationOptions<
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

export function getPatchAnythingArraysTopLevelPayloadsMutationKey() {
  return ['anything', '/anything/arrays/top-level-payloads', 'PATCH'] as const
}

export function getPatchAnythingArraysTopLevelPayloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingArraysTopLevelPayloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>,
    ) {
      return parseResponse(client.anything.arrays['top-level-payloads'].$patch(args, options))
    },
  })
}

export function injectPatchAnythingArraysTopLevelPayloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>,
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
    const mutationDefaults = getPatchAnythingArraysTopLevelPayloadsMutationOptions<
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

export function getPostAnythingObjectsMutationKey() {
  return ['anything', '/anything/objects', 'POST'] as const
}

export function getPostAnythingObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.objects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.objects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.objects.$post>) {
      return parseResponse(client.anything.objects.$post(args, options))
    },
  })
}

export function injectPostAnythingObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.objects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.objects.$post>,
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
    const mutationDefaults = getPostAnythingObjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingCircularMutationKey() {
  return ['anything', '/anything/circular', 'POST'] as const
}

export function getPostAnythingCircularMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.circular.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.circular.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingCircularMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.circular.$post>) {
      return parseResponse(client.anything.circular.$post(args, options))
    },
  })
}

export function injectPostAnythingCircular<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.circular.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.circular.$post>,
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
    const mutationDefaults = getPostAnythingCircularMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAnythingCircularMutationKey() {
  return ['anything', '/anything/circular', 'PATCH'] as const
}

export function getPatchAnythingCircularMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.circular.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.circular.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingCircularMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.circular.$patch>) {
      return parseResponse(client.anything.circular.$patch(args, options))
    },
  })
}

export function injectPatchAnythingCircular<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.circular.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.circular.$patch>,
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
    const mutationDefaults = getPatchAnythingCircularMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingRawBodyTopLevelPayloadsMutationKey() {
  return ['anything', '/anything/raw_body/top-level-payloads', 'POST'] as const
}

export function getPostAnythingRawBodyTopLevelPayloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingRawBodyTopLevelPayloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>,
    ) {
      return parseResponse(client.anything.raw_body['top-level-payloads'].$post(args, options))
    },
  })
}

export function injectPostAnythingRawBodyTopLevelPayloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>,
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
    const mutationDefaults = getPostAnythingRawBodyTopLevelPayloadsMutationOptions<
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

export function getPatchAnythingRawBodyTopLevelPayloadsMutationKey() {
  return ['anything', '/anything/raw_body/top-level-payloads', 'PATCH'] as const
}

export function getPatchAnythingRawBodyTopLevelPayloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingRawBodyTopLevelPayloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>,
    ) {
      return parseResponse(client.anything.raw_body['top-level-payloads'].$patch(args, options))
    },
  })
}

export function injectPatchAnythingRawBodyTopLevelPayloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>,
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
    const mutationDefaults = getPatchAnythingRawBodyTopLevelPayloadsMutationOptions<
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

export function getPostAnythingQuirksMutationKey() {
  return ['anything', '/anything/quirks', 'POST'] as const
}

export function getPostAnythingQuirksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.quirks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingQuirksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.quirks.$post>) {
      return parseResponse(client.anything.quirks.$post(args, options))
    },
  })
}

export function injectPostAnythingQuirks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.anything.quirks.$post>,
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
    const mutationDefaults = getPostAnythingQuirksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutAnythingQuirksPolymorphismMutationKey() {
  return ['anything', '/anything/quirks/polymorphism', 'PUT'] as const
}

export function getPutAnythingQuirksPolymorphismMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.anything.quirks.polymorphism.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingQuirksPolymorphismMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.quirks.polymorphism.$put>) {
      return parseResponse(client.anything.quirks.polymorphism.$put(args, options))
    },
  })
}

export function injectPutAnythingQuirksPolymorphism<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.anything.quirks.polymorphism.$put>,
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
    const mutationDefaults = getPutAnythingQuirksPolymorphismMutationOptions<
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

export function getPostAnythingQuirksPolymorphismMutationKey() {
  return ['anything', '/anything/quirks/polymorphism', 'POST'] as const
}

export function getPostAnythingQuirksPolymorphismMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.anything.quirks.polymorphism.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingQuirksPolymorphismMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.quirks.polymorphism.$post>) {
      return parseResponse(client.anything.quirks.polymorphism.$post(args, options))
    },
  })
}

export function injectPostAnythingQuirksPolymorphism<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.anything.quirks.polymorphism.$post>,
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
    const mutationDefaults = getPostAnythingQuirksPolymorphismMutationOptions<
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

export function getPatchAnythingQuirksPolymorphismMutationKey() {
  return ['anything', '/anything/quirks/polymorphism', 'PATCH'] as const
}

export function getPatchAnythingQuirksPolymorphismMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.anything.quirks.polymorphism.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingQuirksPolymorphismMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.quirks.polymorphism.$patch>) {
      return parseResponse(client.anything.quirks.polymorphism.$patch(args, options))
    },
  })
}

export function injectPatchAnythingQuirksPolymorphism<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.anything.quirks.polymorphism.$patch>,
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
    const mutationDefaults = getPatchAnythingQuirksPolymorphismMutationOptions<
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
