import { createRoute, z } from '@hono/zod-openapi'

const _403Schema = z
  .object({
    error: z.string().exactOptional().openapi({ example: 'Access Denied' }),
    success: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ description: 'Access Denied', required: [] })
  .openapi('_403')

const _405Schema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        example: 'API Access Denied! Your API account does not have access to this Verb Method!',
      }),
    success: z.int().exactOptional().openapi({ example: 0 }),
  })
  .openapi({ description: 'API Access Denied', required: [] })
  .openapi('_405')

const _412Schema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ example: 'API Access Denied! Your API key is invalid or has expired!' }),
    success: z.int().exactOptional().openapi({ example: 0 }),
  })
  .openapi({ description: 'API Key invalid', required: [] })
  .openapi('_412')

const _449Schema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'OTP Required is configured for this User. Retry login with OTP' }),
    success: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({
    description: 'OTP Required is configured for this User. Retry login with OTP',
    required: [],
  })
  .openapi('_449')

const _201ShareSchema = z
  .object({
    auth_link: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://khome.kumpeapps.com/portal/wish-list.php?token=8ou7jyubj878h7iunk',
      }),
    success: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({
    example: {
      auth_link: 'https://khome.kumpeapps.com/portal/wish-list.php?token=8ou7jyubj878h7iunk',
      success: true,
    },
    required: [],
  })
  .openapi('_201Share')

const AddUserResponseSchema = z
  .object({
    added: z.string().exactOptional().openapi({ example: '{}' }),
    aff_added: z.string().exactOptional(),
    aff_id: z.string().exactOptional(),
    aff_payout_type: z.string().exactOptional(),
    avatar: z.string().exactOptional(),
    city: z.string().exactOptional(),
    comment: z.string().exactOptional().openapi({ example: 'Added Via KKids API' }),
    country: z.string().exactOptional(),
    disable_lock_until: z.string().exactOptional(),
    email: z.string().exactOptional().openapi({ example: 'jane@doe.com' }),
    i_agree: z.string().exactOptional().openapi({ example: '0' }),
    is_affiliate: z.string().exactOptional(),
    is_locked: z.string().exactOptional().openapi({ example: '0' }),
    lang: z.string().exactOptional(),
    last_login: z.string().exactOptional(),
    login: z.string().exactOptional().openapi({ example: 'janedoe' }),
    name_f: z.string().exactOptional().openapi({ example: 'Jane' }),
    name_l: z.string().exactOptional().openapi({ example: 'Doe' }),
    pass: z.string().exactOptional(),
    pass_dattm: z.string().exactOptional().openapi({ example: '{}' }),
    phone: z.string().exactOptional(),
    pin: z.string().exactOptional().openapi({ example: '0' }),
    plain_password: z.string().exactOptional(),
    remember_key: z.string().exactOptional(),
    remote_addr: z.string().exactOptional().openapi({ example: '104.237.5.109' }),
    require_consent: z.string().exactOptional(),
    reseller_id: z.string().exactOptional(),
    saved_form_id: z.string().exactOptional(),
    state: z.string().exactOptional(),
    status: z.string().exactOptional().openapi({ example: '0' }),
    street: z.string().exactOptional(),
    street2: z.string().exactOptional(),
    subusers_parent_id: z.string().exactOptional().openapi({ example: '0' }),
    tax_id: z.string().exactOptional(),
    unsubscribed: z.string().exactOptional().openapi({ example: '0' }),
    user_agent: z.string().exactOptional(),
    user_id: z.int().exactOptional().openapi({ example: 1 }),
    zip: z.string().exactOptional(),
  })
  .openapi({
    description: 'add user',
    example: {
      added: {},
      aff_added: 'aff_added',
      aff_id: 'aff_id',
      aff_payout_type: 'aff_payout_type',
      avatar: 'avatar',
      city: 'city',
      comment: 'Added Via KKids API',
      country: 'country',
      disable_lock_until: 'disable_lock_until',
      email: 'jane@doe.com',
      i_agree: '0',
      is_affiliate: 'is_affiliate',
      is_locked: '0',
      lang: 'lang',
      last_login: 'last_login',
      login: 'janedoe',
      name_f: 'Jane',
      name_l: 'Doe',
      pass: 'pass',
      pass_dattm: {},
      phone: 'phone',
      pin: '0',
      plain_password: 'plain_password',
      remember_key: 'remember_key',
      remote_addr: '104.237.5.109',
      require_consent: 'require_consent',
      reseller_id: 'reseller_id',
      saved_form_id: 'saved_form_id',
      state: 'state',
      status: '0',
      street: 'street',
      street2: 'street2',
      subusers_parent_id: '0',
      tax_id: 'tax_id',
      unsubscribed: '0',
      user_agent: 'user_agent',
      user_id: 1,
      zip: 'zip',
    },
    required: [],
  })
  .openapi('AddUserResponse')

const AllowanceAllowanceTransactionSchema = z
  .object({
    amount: z.int().exactOptional().openapi({ example: 10 }),
    date: z.string().exactOptional().openapi({ example: '{}' }),
    transactionDescription: z
      .string()
      .exactOptional()
      .openapi({ example: 'Weekly Allowance for Chores' }),
    transactionId: z.int().exactOptional().openapi({ example: 85 }),
    transactionType: z.string().exactOptional().openapi({ example: 'Add' }),
    userId: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({
    example: {
      amount: 10,
      date: {},
      transactionDescription: 'Weekly Allowance for Chores',
      transactionId: 85,
      transactionType: 'Add',
      userId: 1,
    },
    required: [],
  })
  .openapi('AllowanceAllowanceTransaction')

const AllowanceSchema = z
  .object({
    allowanceTransaction: z.array(AllowanceAllowanceTransactionSchema).exactOptional(),
    balance: z.int().exactOptional(),
    id: z.int().exactOptional().openapi({ example: 24 }),
    lastUpdated: z.string().exactOptional().openapi({ example: '{}' }),
    success: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({
    description: 'Allowance',
    example: {
      allowanceTransaction: [
        {
          amount: 10,
          date: {},
          transactionDescription: 'Weekly Allowance for Chores',
          transactionId: 85,
          transactionType: 'Add',
          userId: 1,
        },
        {
          amount: 10,
          date: {},
          transactionDescription: 'Weekly Allowance for Chores',
          transactionId: 85,
          transactionType: 'Add',
          userId: 1,
        },
      ],
      balance: 0,
      id: 24,
      lastUpdated: '{}',
      success: 1,
    },
    required: [],
  })
  .openapi('Allowance')

const UserSchema = z
  .object({
    email: z.string().exactOptional().openapi({ example: 'jane@doe.com' }),
    emoji: z.string().exactOptional().openapi({ example: '🤗' }),
    enableAllowance: z.boolean().exactOptional().openapi({ example: true }),
    enableBehaviorChart: z.boolean().exactOptional().openapi({ example: false }),
    enableChores: z.boolean().exactOptional().openapi({ example: true }),
    enableNoAds: z.boolean().exactOptional().openapi({ example: false }),
    enableObjectDetection: z.boolean().exactOptional().openapi({ example: false }),
    enableTmdb: z.boolean().exactOptional().openapi({ example: true }),
    firstName: z.string().exactOptional().openapi({ example: 'Jane' }),
    homeId: z.int().exactOptional().openapi({ example: 1 }),
    isActive: z.boolean().exactOptional().openapi({ example: true }),
    isAdmin: z.boolean().exactOptional().openapi({ example: false }),
    isBanned: z.boolean().exactOptional().openapi({ example: false }),
    isChild: z.boolean().exactOptional().openapi({ example: true }),
    isDisabled: z.boolean().exactOptional().openapi({ example: false }),
    isLocked: z.boolean().exactOptional().openapi({ example: false }),
    isMaster: z.boolean().exactOptional().openapi({ example: false }),
    lastName: z.string().exactOptional().openapi({ example: 'Doe' }),
    masterId: z.int().exactOptional().openapi({ example: 1 }),
    pushAllowance: z.boolean().exactOptional().openapi({ example: true }),
    pushAllowanceNew: z.boolean().exactOptional().openapi({ example: true }),
    pushChores: z.boolean().exactOptional().openapi({ example: true }),
    pushChoresNew: z.boolean().exactOptional().openapi({ example: true }),
    pushChoresReminders: z.boolean().exactOptional().openapi({ example: true }),
    tmdbKey: z.string().exactOptional().openapi({ example: '9a87huiufe94r8' }),
    userId: z.int().exactOptional().openapi({ example: 10 }),
    username: z.string().exactOptional().openapi({ example: 'janedoe' }),
    weeklyAllowance: z.int().exactOptional().openapi({ example: 5 }),
  })
  .openapi({
    description: 'user',
    example: {
      email: 'jane@doe.com',
      emoji: '🤗',
      enableAllowance: true,
      enableBehaviorChart: false,
      enableChores: true,
      enableNoAds: false,
      enableObjectDetection: false,
      enableTmdb: true,
      firstName: 'Jane',
      homeId: 1,
      isActive: true,
      isAdmin: false,
      isBanned: false,
      isChild: true,
      isDisabled: false,
      isLocked: false,
      isMaster: false,
      lastName: 'Doe',
      masterId: 1,
      pushAllowance: true,
      pushAllowanceNew: true,
      pushChores: true,
      pushChoresNew: true,
      pushChoresReminders: true,
      tmdbKey: '9a87huiufe94r8',
      userId: 10,
      username: 'janedoe',
      weeklyAllowance: 5,
    },
    required: [],
  })
  .openapi('User')

const AuthenticationSchema = z
  .object({
    apiKey: z.string().exactOptional().openapi({ example: '67utyuvb7i6ugy9p843erwt3g' }),
    success: z.int().exactOptional().openapi({ example: 1 }),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description: 'authentication',
    example: {
      apiKey: '67utyuvb7i6ugy9p843erwt3g',
      success: 1,
      user: {
        email: 'jane@doe.com',
        emoji: '🤗',
        enableAllowance: true,
        enableBehaviorChart: false,
        enableChores: true,
        enableNoAds: false,
        enableObjectDetection: false,
        enableTmdb: true,
        firstName: 'Jane',
        homeId: 1,
        isActive: true,
        isAdmin: false,
        isBanned: false,
        isChild: true,
        isDisabled: false,
        isLocked: false,
        isMaster: false,
        lastName: 'Doe',
        masterId: 1,
        pushAllowance: true,
        pushAllowanceNew: true,
        pushChores: true,
        pushChoresNew: true,
        pushChoresReminders: true,
        tmdbKey: '9a87huiufe94r8',
        userId: 10,
        username: 'janedoe',
        weeklyAllowance: 5,
      },
    },
    required: [],
  })
  .openapi('Authentication')

const ChoreSchema = z
  .object({
    aiIcon: z.string().exactOptional().openapi({ example: 'n' }),
    altitude: z.int().exactOptional(),
    blockDash: z.boolean().exactOptional().openapi({ example: false }),
    choreDescription: z
      .string()
      .exactOptional()
      .openapi({ example: 'Wash dishes and clean off counter' }),
    choreName: z.string().exactOptional().openapi({ example: 'Wash Dishes' }),
    choreNumber: z.int().exactOptional().openapi({ example: 1 }),
    day: z.string().exactOptional().openapi({ example: 'Monday' }),
    extraAllowance: z.int().exactOptional().openapi({ example: 5 }),
    idChoreList: z.int().exactOptional().openapi({ example: 1 }),
    isCalendar: z.boolean().exactOptional().openapi({ example: false }),
    kid: z.string().exactOptional().openapi({ example: 'jane' }),
    latitude: z.int().exactOptional(),
    longitude: z.int().exactOptional(),
    nfcTag: z.string().exactOptional().openapi({ example: 'kkids//Chores?washdishestag' }),
    notes: z.string().exactOptional(),
    oneTime: z.boolean().exactOptional().openapi({ example: false }),
    optional: z.boolean().exactOptional().openapi({ example: false }),
    reassignable: z.boolean().exactOptional().openapi({ example: true }),
    reassigned: z.boolean().exactOptional().openapi({ example: false }),
    requireObjectDetection: z.string().exactOptional().openapi({ example: 'bed' }),
    startDate: z.string().exactOptional().openapi({ example: '{}' }),
    status: z.string().exactOptional().openapi({ example: 'todo' }),
    stolen: z.boolean().exactOptional().openapi({ example: false }),
    stolenBy: z.string().exactOptional(),
    updated: z.string().exactOptional().openapi({ example: '{}' }),
    updatedBy: z.string().exactOptional().openapi({ example: 'janedoe' }),
  })
  .openapi({
    description: 'chore',
    example: {
      aiIcon: 'n',
      altitude: 1,
      blockDash: false,
      choreDescription: 'Wash dishes and clean off counter',
      choreName: 'Wash Dishes',
      choreNumber: 1,
      day: 'Monday',
      extraAllowance: 5,
      idChoreList: 1,
      isCalendar: false,
      kid: 'jane',
      latitude: 0,
      longitude: 6,
      nfcTag: 'kkids//Chores?washdishestag',
      notes: 'notes',
      oneTime: false,
      reassignable: true,
      reassigned: false,
      requireObjectDetection: 'bed',
      startDate: {},
      status: 'todo',
      stolen: false,
      stolenBy: 'stolenBy',
      updated: {},
      updatedBy: 'janedoe',
    },
    required: [],
  })
  .openapi('Chore')

const ChorelistSchema = z
  .object({
    chore: z.array(ChoreSchema).exactOptional(),
    success: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({
    description: 'chorelist',
    example: {
      chore: [
        {
          aiIcon: 'n',
          altitude: 1,
          blockDash: false,
          choreDescription: 'Wash dishes and clean off counter',
          choreName: 'Wash Dishes',
          choreNumber: 1,
          day: 'Monday',
          extraAllowance: 5,
          idChoreList: 1,
          isCalendar: false,
          kid: 'jane',
          latitude: 0,
          longitude: 6,
          nfcTag: 'kkids//Chores?washdishestag',
          notes: 'notes',
          oneTime: false,
          reassignable: true,
          reassigned: false,
          requireObjectDetection: 'bed',
          startDate: {},
          status: 'todo',
          stolen: false,
          stolenBy: 'stolenBy',
          updated: {},
          updatedBy: 'janedoe',
        },
        {
          aiIcon: 'n',
          altitude: 1,
          blockDash: false,
          choreDescription: 'Wash dishes and clean off counter',
          choreName: 'Wash Dishes',
          choreNumber: 1,
          day: 'Monday',
          extraAllowance: 5,
          idChoreList: 1,
          isCalendar: false,
          kid: 'jane',
          latitude: 0,
          longitude: 6,
          nfcTag: 'kkids//Chores?washdishestag',
          notes: 'notes',
          oneTime: false,
          reassignable: true,
          reassigned: false,
          requireObjectDetection: 'bed',
          startDate: {},
          status: 'todo',
          stolen: false,
          stolenBy: 'stolenBy',
          updated: {},
          updatedBy: 'janedoe',
        },
      ],
      success: 1,
    },
    required: [],
  })
  .openapi('Chorelist')

const InlineResponse_201Schema = z
  .object({
    app_key: z.string().openapi({ example: '8765futybkunj98ho7gi6tybkuhj' }),
    success: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({
    example: { app_key: '8765futybkunj98ho7gi6tybkuhj', success: true },
    required: ['app_key'],
  })
  .openapi('InlineResponse_201')

const InlineResponse_201_1Schema = z
  .object({
    auth_key: z.string().exactOptional().openapi({ example: '8ou7jyubj878h7iunk' }),
    success: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({ example: { auth_key: '8ou7jyubj878h7iunk', success: true }, required: [] })
  .openapi('InlineResponse_201_1')

const InlineResponse_202Schema = z
  .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
  .openapi({ example: { success: true }, required: [] })
  .openapi('InlineResponse_202')

const InvalidateApiKeySchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'API Key Set to Expire Immediately' }),
    success: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({
    description: 'invalidate api key',
    example: { message: 'API Key Set to Expire Immediately', success: 1 },
    required: [],
  })
  .openapi('InvalidateApiKey')

const NodataSchema = z
  .object({
    error: z.string().exactOptional().openapi({ example: 'No Data Found' }),
    status: z.int().exactOptional().openapi({ example: 0 }),
  })
  .openapi({ description: 'nodata', required: [] })
  .openapi('Nodata')

const SuccessSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'success' }),
    success: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({ description: 'Success', example: { message: 'success', success: true }, required: [] })
  .openapi('Success')

const UserlistSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: true }),
    user: z.array(UserSchema).exactOptional(),
  })
  .openapi({
    description: 'userlist',
    example: {
      success: true,
      user: [
        {
          email: 'jane@doe.com',
          emoji: '🤗',
          enableAllowance: true,
          enableBehaviorChart: false,
          enableChores: true,
          enableNoAds: false,
          enableObjectDetection: false,
          enableTmdb: true,
          firstName: 'Jane',
          homeId: 1,
          isActive: true,
          isAdmin: false,
          isBanned: false,
          isChild: true,
          isDisabled: false,
          isLocked: false,
          isMaster: false,
          lastName: 'Doe',
          masterId: 1,
          pushAllowance: true,
          pushAllowanceNew: true,
          pushChores: true,
          pushChoresNew: true,
          pushChoresReminders: true,
          tmdbKey: '9a87huiufe94r8',
          userId: 10,
          username: 'janedoe',
          weeklyAllowance: 5,
        },
        {
          email: 'jane@doe.com',
          emoji: '🤗',
          enableAllowance: true,
          enableBehaviorChart: false,
          enableChores: true,
          enableNoAds: false,
          enableObjectDetection: false,
          enableTmdb: true,
          firstName: 'Jane',
          homeId: 1,
          isActive: true,
          isAdmin: false,
          isBanned: false,
          isChild: true,
          isDisabled: false,
          isLocked: false,
          isMaster: false,
          lastName: 'Doe',
          masterId: 1,
          pushAllowance: true,
          pushAllowanceNew: true,
          pushChores: true,
          pushChoresNew: true,
          pushChoresReminders: true,
          tmdbKey: '9a87huiufe94r8',
          userId: 10,
          username: 'janedoe',
          weeklyAllowance: 5,
        },
      ],
    },
    required: [],
  })
  .openapi('Userlist')

const WishSchema = z
  .object({
    description: z.string().exactOptional().openapi({ example: 'Pokemon trading cards' }),
    id: z.int().exactOptional().openapi({ example: 1 }),
    link: z.string().exactOptional().openapi({ example: 'https://www.google.com' }),
    master_id: z.int().exactOptional().openapi({ example: 1 }),
    priority: z.int().exactOptional().openapi({ example: 1 }),
    title: z.string().exactOptional().openapi({ example: 'Pokemon Cards' }),
    user_id: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({
    example: {
      description: 'Pokemon trading cards',
      id: 1,
      link: 'https://www.google.com',
      master_id: 1,
      priority: 1,
      title: 'Pokemon Cards',
      user_id: 1,
    },
    required: [],
  })
  .openapi('Wish')

const WishlistSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: true }),
    wish: z.array(WishSchema).exactOptional(),
  })
  .openapi({
    description: 'Allowance',
    example: {
      success: true,
      wish: [
        {
          description: 'Pokemon trading cards',
          id: 1,
          link: 'https://www.google.com',
          master_id: 1,
          priority: 1,
          title: 'Pokemon Cards',
          user_id: 1,
        },
        {
          description: 'Pokemon trading cards',
          id: 1,
          link: 'https://www.google.com',
          master_id: 1,
          priority: 1,
          title: 'Pokemon Cards',
          user_id: 1,
        },
      ],
    },
    required: [],
  })
  .openapi('Wishlist')

const AppKeySecurityScheme = {
  in: 'header',
  name: 'X-Auth',
  type: 'apiKey',
  'x-apikeyInfoFunc': 'controllers.authorization_controller.check_app_key',
}

const AuthKeySecurityScheme = {
  in: 'header',
  name: 'X-Auth',
  type: 'apiKey',
  'x-apikeyInfoFunc': 'controllers.authorization_controller.check_auth_key',
}

export const putAppkeyRoute = createRoute({
  method: 'put',
  path: '/appkey',
  tags: ['authentication'],
  summary: 'Deactivate app key',
  description: 'Pass your app key to deactivate the key',
  operationId: 'appkey_put',
  request: {
    query: z.object({
      app_key: z
        .string()
        .openapi({
          param: {
            description: 'app key to deactivate',
            explode: true,
            in: 'query',
            name: 'app_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'App key deactivated',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
  },
  deprecated: true,
  security: [{ app_key: [] }],
})

export const postAppkeyRoute = createRoute({
  method: 'post',
  path: '/appkey',
  tags: ['authentication'],
  summary: 'Request app key',
  description: 'Request a new app key by passing username and password for app account',
  operationId: 'appkey_post',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'Username assigned to your app',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Password assigned to your app',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      supportsYubikey: z
        .stringbool()
        .openapi({
          param: {
            description: 'App supports YubiKey OTP',
            explode: true,
            in: 'query',
            name: 'supportsYubikey',
            required: true,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'app key created',
      content: { 'application/json': { schema: InlineResponse_201Schema } },
    },
  },
  deprecated: true,
  security: [],
})

export const patchAppkeyRoute = createRoute({
  method: 'patch',
  path: '/appkey',
  tags: ['authentication'],
  summary: 'Compromise app key',
  description:
    'Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.',
  operationId: 'appkey_patch',
  request: {
    query: z.object({
      app_key: z
        .string()
        .openapi({
          param: {
            description: 'compromised app key',
            explode: true,
            in: 'query',
            name: 'app_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      comments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comments (like how was this compromised)',
            explode: true,
            in: 'query',
            name: 'comments',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'App key deactivated',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
  },
  deprecated: true,
  security: [],
})

export const putAuthenticationAppkeyRoute = createRoute({
  method: 'put',
  path: '/authentication/appkey',
  tags: ['authentication'],
  summary: 'Deactivate app key',
  description: 'Pass your app key to deactivate the key',
  operationId: 'auth_appkey_put',
  request: {
    query: z.object({
      app_key: z
        .string()
        .openapi({
          param: {
            description: 'app key to deactivate',
            explode: true,
            in: 'query',
            name: 'app_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'App key deactivated',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
  },
  security: [{ app_key: [] }],
})

export const postAuthenticationAppkeyRoute = createRoute({
  method: 'post',
  path: '/authentication/appkey',
  tags: ['authentication'],
  summary: 'Request app key',
  description: 'Request a new app key by passing username and password for app account',
  operationId: 'auth_appkey_post',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'Username assigned to your app',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Password assigned to your app',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      supportsYubikey: z
        .stringbool()
        .openapi({
          param: {
            description: 'App supports YubiKey OTP',
            explode: true,
            in: 'query',
            name: 'supportsYubikey',
            required: true,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'app key created',
      content: { 'application/json': { schema: InlineResponse_201Schema } },
    },
  },
  security: [],
})

export const patchAuthenticationAppkeyRoute = createRoute({
  method: 'patch',
  path: '/authentication/appkey',
  tags: ['authentication'],
  summary: 'Compromise app key',
  description:
    'Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.',
  operationId: 'auth_appkey_patch',
  request: {
    query: z.object({
      app_key: z
        .string()
        .openapi({
          param: {
            description: 'compromised app key',
            explode: true,
            in: 'query',
            name: 'app_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      comments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comments (like how was this compromised)',
            explode: true,
            in: 'query',
            name: 'comments',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'App key deactivated',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
  },
  security: [],
})

export const getAuthenticationAuthkeyRoute = createRoute({
  method: 'get',
  path: '/authentication/authkey',
  tags: ['authentication'],
  summary: 'Request auth key for user (login user)',
  description:
    'Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)',
  operationId: 'auth_authkey_get',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated username',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated password',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      otp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'YubiKey OTP (if configured for user)',
            explode: true,
            in: 'query',
            name: 'otp',
            required: false,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      deviceName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "User's device name",
            in: 'query',
            name: 'deviceName',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      identifierForVendor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "identifierForVendor for User's Device (if app is iOS)",
            in: 'query',
            name: 'identifierForVendor',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Authenticated Sucessfully',
      content: { 'application/json': { schema: InlineResponse_201_1Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
    403: { description: 'Access Denied', content: { 'application/json': { schema: _403Schema } } },
    449: {
      description: 'OTP required but not supplied. Please resubmit request with OTP',
      content: { 'application/json': { schema: _449Schema } },
    },
  },
  security: [{ app_key: [] }],
})

export const putAuthenticationAuthkeyRoute = createRoute({
  method: 'put',
  path: '/authentication/authkey',
  tags: ['authentication'],
  summary: 'Deactivate auth key (logout)',
  description: 'Deactivate auth key for user logging them out of your application',
  operationId: 'auth_authkey_put',
  request: {
    query: z.object({
      auth_key: z
        .string()
        .openapi({
          param: {
            description: 'auth key to logout',
            explode: true,
            in: 'query',
            name: 'auth_key',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
  },
  security: [{ app_key: [] }],
})

export const postAuthenticationAuthkeyRoute = createRoute({
  method: 'post',
  path: '/authentication/authkey',
  tags: ['authentication'],
  summary: 'Request auth key for user (login user)',
  description:
    'Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)',
  operationId: 'auth_authkey_post',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated username',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated password',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      otp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'YubiKey OTP (if configured for user)',
            explode: true,
            in: 'query',
            name: 'otp',
            required: false,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Authenticated Sucessfully',
      content: { 'application/json': { schema: InlineResponse_201_1Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
    403: { description: 'Access Denied', content: { 'application/json': { schema: _403Schema } } },
    449: {
      description: 'OTP required but not supplied. Please resubmit request with OTP',
      content: { 'application/json': { schema: _449Schema } },
    },
  },
  security: [{ app_key: [] }],
})

export const patchAuthenticationAuthkeyRoute = createRoute({
  method: 'patch',
  path: '/authentication/authkey',
  tags: ['authentication'],
  summary: 'Compromise auth key',
  description: 'Mark user auth key as compromised',
  operationId: 'auth_authkey_patch',
  request: {
    query: z.object({
      auth_key: z
        .string()
        .openapi({
          param: {
            description: 'auth key to mark as compromised',
            explode: true,
            in: 'query',
            name: 'auth_key',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      comments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comments (like how was this compromised)',
            explode: true,
            in: 'query',
            name: 'comments',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Auth key marked as compromised and locked',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
  },
  security: [],
})

export const getAuthenticationVerifyotpRoute = createRoute({
  method: 'get',
  path: '/authentication/verifyotp',
  tags: ['authentication'],
  summary: 'Verifies YubiKey OTP for authenticated user',
  description: 'Verifies YubiKey OTP for authenticated user',
  operationId: 'auth_verifyotp_get',
  request: {
    query: z.object({
      otp: z
        .string()
        .openapi({
          param: {
            description: 'YubiKey OTP code',
            in: 'query',
            name: 'otp',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User Authenticated Sucessfully' },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey/AuthKey' },
    403: { description: 'Access Denied', content: { 'application/json': { schema: _403Schema } } },
  },
  security: [{ auth_key: [] }],
})

export const getAuthkeyRoute = createRoute({
  method: 'get',
  path: '/authkey',
  tags: ['authentication'],
  summary: 'Request auth key for user (login user)',
  description:
    'Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)',
  operationId: 'authkey_get',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated username',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated password',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      otp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'YubiKey OTP (if configured for user)',
            explode: true,
            in: 'query',
            name: 'otp',
            required: false,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Authenticated Sucessfully',
      content: { 'application/json': { schema: InlineResponse_201_1Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
    403: { description: 'Access Denied', content: { 'application/json': { schema: _403Schema } } },
    449: {
      description: 'OTP required but not supplied. Please resubmit request with OTP',
      content: { 'application/json': { schema: _449Schema } },
    },
  },
  deprecated: true,
  security: [{ app_key: [] }],
})

export const putAuthkeyRoute = createRoute({
  method: 'put',
  path: '/authkey',
  tags: ['authentication'],
  summary: 'Deactivate auth key (logout)',
  description: 'Deactivate auth key for user logging them out of your application',
  operationId: 'authkey_put',
  request: {
    query: z.object({
      auth_key: z
        .string()
        .openapi({
          param: {
            description: 'auth key to logout',
            explode: true,
            in: 'query',
            name: 'auth_key',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
  },
  deprecated: true,
  security: [{ app_key: [] }],
})

export const postAuthkeyRoute = createRoute({
  method: 'post',
  path: '/authkey',
  tags: ['authentication'],
  summary: 'Request auth key for user (login user)',
  description:
    'Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)',
  operationId: 'authkey_post',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated username',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Authenticated password',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      otp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'YubiKey OTP (if configured for user)',
            explode: true,
            in: 'query',
            name: 'otp',
            required: false,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Authenticated Sucessfully',
      content: { 'application/json': { schema: InlineResponse_201_1Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
    403: { description: 'Access Denied', content: { 'application/json': { schema: _403Schema } } },
    449: {
      description: 'OTP required but not supplied. Please resubmit request with OTP',
      content: { 'application/json': { schema: _449Schema } },
    },
  },
  deprecated: true,
  security: [{ app_key: [] }],
})

export const patchAuthkeyRoute = createRoute({
  method: 'patch',
  path: '/authkey',
  tags: ['authentication'],
  summary: 'Compromise auth key',
  description: 'Mark user auth key as compromised',
  operationId: 'authkey_patch',
  request: {
    query: z.object({
      auth_key: z
        .string()
        .openapi({
          param: {
            description: 'auth key to mark as compromised',
            explode: true,
            in: 'query',
            name: 'auth_key',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      comments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comments (like how was this compromised)',
            explode: true,
            in: 'query',
            name: 'comments',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Auth key marked as compromised and locked',
      content: { 'application/json': { schema: InlineResponse_202Schema } },
    },
    401: { description: 'Invalid/Locked/Blocked/Compromised AppKey' },
  },
  deprecated: true,
  security: [],
})

export const getKkidAllowanceRoute = createRoute({
  method: 'get',
  path: '/kkid/allowance',
  tags: ['KKid'],
  summary: 'returns allowance balance and allowance transactions',
  description:
    'By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.\n',
  operationId: 'kkid_allowance_get',
  request: {
    query: z.object({
      kidUserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'userID of the kid',
            explode: true,
            in: 'query',
            name: 'kidUserId',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      transactionDays: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'number of days you wish to search allowance transactions (default is 90 days)',
            explode: true,
            in: 'query',
            name: 'transactionDays',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: AllowanceSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Returned',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const postKkidAllowanceRoute = createRoute({
  method: 'post',
  path: '/kkid/allowance',
  tags: ['KKid'],
  summary: 'adds new allowance transaction to kidUserID',
  description:
    'By passing in the appropriate options, you can add an allowance transaction to a given user.\n',
  operationId: 'kkid_allowance_post',
  request: {
    query: z.object({
      kidUserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'userID of the kid',
            explode: true,
            in: 'query',
            name: 'kidUserId',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      amount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'amount you wish to Add/Subtract (subtract value should be a negative value)',
            explode: true,
            in: 'query',
            name: 'amount',
            required: true,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      description: z
        .string()
        .openapi({
          param: {
            description: 'Description (reason) of allowance transaction',
            explode: true,
            in: 'query',
            name: 'description',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      transactionType: z
        .enum(['Add', 'Subtract'])
        .openapi({
          param: {
            description: 'Transaction Type (Add/Subtract)',
            explode: true,
            in: 'query',
            name: 'transactionType',
            required: true,
            schema: {
              description:
                'Sort order:\n * `Add` - Add Allowance\n * `Subtract` - Subtract Allowance\n',
              enum: ['Add', 'Subtract'],
              type: 'string',
            },
            style: 'form',
          },
          description:
            'Sort order:\n * `Add` - Add Allowance\n * `Subtract` - Subtract Allowance\n',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Returned',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const postKkidApnsRoute = createRoute({
  method: 'post',
  path: '/kkid/apns',
  tags: ['KKid'],
  summary: 'subscribes/unsubscribes/registers for apns push notifications',
  operationId: 'kkid_apns_post',
  request: {
    query: z.object({
      kidUserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'userID of the kid',
            explode: true,
            in: 'query',
            name: 'kidUserId',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      tool: z
        .enum(['register', 'subscribe', 'unsubscribe', 'send'])
        .openapi({
          param: {
            description: 'tool you wish to talk to',
            explode: true,
            in: 'query',
            name: 'tool',
            required: true,
            schema: { enum: ['register', 'subscribe', 'unsubscribe', 'send'], type: 'string' },
            style: 'form',
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device APNS token (required for register)',
            explode: true,
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      devicename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of device to associate to token (required for register)',
            explode: true,
            in: 'query',
            name: 'devicename',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'title of APNS message (required for send)',
            explode: true,
            in: 'query',
            name: 'title',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'APNS message body (required for send)',
            explode: true,
            in: 'query',
            name: 'message',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      badge: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number for badge icon (optional for send)',
            explode: true,
            in: 'query',
            name: 'badge',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      sound: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of sound file to play for send notification (optional for send)',
            explode: true,
            in: 'query',
            name: 'sound',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      section: z
        .enum([
          'Chores',
          'Chores-New',
          'Chores-Reminders',
          'Allowance',
          'Allowance-New',
          'WishList',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Notification section name (required for send/subscribe/unsubscribe)',
            explode: true,
            in: 'query',
            name: 'section',
            required: false,
            schema: {
              enum: [
                'Chores',
                'Chores-New',
                'Chores-Reminders',
                'Allowance',
                'Allowance-New',
                'WishList',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      priority: z
        .enum(['passive', 'active', 'time-sensitive', 'critical'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Notification section name (optional for send, default is active)',
            explode: true,
            in: 'query',
            name: 'priority',
            required: false,
            schema: { enum: ['passive', 'active', 'time-sensitive', 'critical'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Returned',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const getKkidChorelistRoute = createRoute({
  method: 'get',
  path: '/kkid/chorelist',
  tags: ['KKid'],
  summary: 'returns list of chores for given user',
  description:
    "By passing in the appropriate options, you can search for\nchores assigned to a given user within the authenticated user's master account\n",
  operationId: 'kkid_chorelist_get',
  request: {
    query: z.object({
      kidUsername: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Username of kid you wish to search',
            explode: true,
            in: 'query',
            name: 'kidUsername',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      day: z
        .enum([
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Weekly',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Day of week for chores (Weekly for weekly chores)',
            explode: true,
            in: 'query',
            name: 'day',
            required: false,
            schema: {
              enum: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Weekly',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of Chore to search',
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      blockDash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by blockDash parameter',
            explode: true,
            in: 'query',
            name: 'blockDash',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      optional: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by optional parameter',
            explode: true,
            in: 'query',
            name: 'optional',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      canSteal: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by canSteal parameter',
            explode: true,
            in: 'query',
            name: 'canSteal',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      includeCalendar: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'include calendar notations (default is false)',
            explode: true,
            in: 'query',
            name: 'includeCalendar',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: ChorelistSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Found.',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const putKkidChorelistRoute = createRoute({
  method: 'put',
  path: '/kkid/chorelist',
  tags: ['KKid'],
  summary: 'updates chore for given chore id',
  description:
    "By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account\n",
  operationId: 'kkid_chorelist_put',
  request: {
    query: z.object({
      idChoreList: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'id number of chore you wish to update',
            explode: true,
            in: 'query',
            name: 'idChoreList',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'new status of chore',
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      stolen: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'mark chore as stolen by sibling',
            explode: true,
            in: 'query',
            name: 'stolen',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      stolenBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'username of sibling that stole the chore (required if stolen is true)',
            explode: true,
            in: 'query',
            name: 'stolenBy',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      nfcTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'text field of NFC tag that is required to be scanned to check off this chore (normally null)',
            explode: true,
            in: 'query',
            name: 'nfcTag',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'notes field for chore',
            explode: true,
            in: 'query',
            name: 'notes',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'GPS latitude of where the chore was marked',
            explode: true,
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'GPS longitude of where the chore was marked',
            explode: true,
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      altitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'GPS altitude of where the chore was marked',
            explode: true,
            in: 'query',
            name: 'altitude',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      updatedByAutomation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'true if updated via API by automation system',
            explode: true,
            in: 'query',
            name: 'updatedByAutomation',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      whereDay: z
        .enum([
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Weekly',
          'Today',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Where day equals...',
            explode: true,
            in: 'query',
            name: 'whereDay',
            required: false,
            schema: {
              enum: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Weekly',
                'Today',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      whereStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Where status equals...',
            explode: true,
            in: 'query',
            name: 'whereStatus',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      whereName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Where chore name equals...',
            explode: true,
            in: 'query',
            name: 'whereName',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Found.',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const postKkidChorelistRoute = createRoute({
  method: 'post',
  path: '/kkid/chorelist',
  tags: ['KKid'],
  summary: 'adds chore for given user',
  description:
    "By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account\n",
  operationId: 'kkid_chorelist_post',
  request: {
    query: z.object({
      kidUsername: z
        .string()
        .openapi({
          param: {
            description: 'username of kid to assign the chore to.',
            explode: true,
            in: 'query',
            name: 'kidUsername',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      day: z
        .enum([
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Weekly',
          'Today',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'day of week (Monday, Tuesday....) for the chore. For weekly chores put Weekly or leave blank',
            explode: true,
            in: 'query',
            name: 'day',
            required: false,
            schema: {
              enum: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Weekly',
                'Today',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      nfcTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'text field of nfc tag required to check off chore',
            explode: true,
            in: 'query',
            name: 'nfcTag',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'status of chore (default is todo)',
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      choreName: z
        .string()
        .openapi({
          param: {
            description: 'name of chore',
            explode: true,
            in: 'query',
            name: 'choreName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      choreDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'optional chore description',
            explode: true,
            in: 'query',
            name: 'choreDescription',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      choreNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'number priority of chore (default is 5)',
            explode: true,
            in: 'query',
            name: 'choreNumber',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      blockDash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'block dash option on this chore',
            explode: true,
            in: 'query',
            name: 'blockDash',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      oneTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'mark as one time chore (does not repeat each week)',
            explode: true,
            in: 'query',
            name: 'oneTime',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      extraAllowance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'ammount of allowance added at end of week for completing this chore',
            explode: true,
            in: 'query',
            name: 'extraAllowance',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      optional: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'mark as optional chore',
            explode: true,
            in: 'query',
            name: 'optional',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      reassignable: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'mark as reassignable (default is true)',
            explode: true,
            in: 'query',
            name: 'reassignable',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      canSteal: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'mark as sibling can steal chore',
            explode: true,
            in: 'query',
            name: 'canSteal',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'date (yyyy-mm-dd) that you wish the chore to start showing up. (default is today)',
            explode: true,
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'notes added to chore (visable only on reports, kids do not see this note, this is mostly just for the developer)',
            explode: true,
            in: 'query',
            name: 'notes',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      requireObjectDetection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'require use of camera to detect object detection tag order to check off chore',
            explode: true,
            in: 'query',
            name: 'requireObjectDetection',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      objectDetectionTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'tag for object detection to search for (required if requireObjectDetection is true)',
            explode: true,
            in: 'query',
            name: 'objectDetectionTag',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      updatedByAutomation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'true if chore updated via API from an Automation System',
            explode: true,
            in: 'query',
            name: 'updatedByAutomation',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      aiIcon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Notes if AI Icons should be used (n for no, y for yes, e for yes- error)',
            explode: true,
            in: 'query',
            name: 'aiIcon',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      isCalendar: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'True if this is a calendar note instead of a chore.',
            explode: true,
            in: 'query',
            name: 'isCalendar',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Found.',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    409: {
      description: 'Conflict- idChoreList parameter was not supplied or is blank',
      content: {},
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const deleteKkidChorelistRoute = createRoute({
  method: 'delete',
  path: '/kkid/chorelist',
  tags: ['KKid'],
  summary: 'deletes chore for given chore id',
  description:
    "By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account\n",
  operationId: 'kkid_chorelist_delete',
  request: {
    query: z.object({
      idChoreList: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'id of the chore you wish to delete',
            explode: true,
            in: 'query',
            name: 'idChoreList',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'deletion successful',
      content: { 'application/json': { schema: SuccessSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    206: {
      description: 'No Data Found.',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    409: {
      description: 'Conflict- idChoreList parameter was not supplied or is blank',
      content: {},
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const postKkidMasteruserRoute = createRoute({
  method: 'post',
  path: '/kkid/masteruser',
  tags: ['KKid'],
  summary: 'adds new master user account',
  description:
    'By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)\n',
  operationId: 'kkid_masteruser_post',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'username of user to create',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'password of user to create',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            description: 'email address of user to create',
            explode: true,
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      firstName: z
        .string()
        .openapi({
          param: {
            description: 'First Name of user to create',
            explode: true,
            in: 'query',
            name: 'firstName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      lastName: z
        .string()
        .openapi({
          param: {
            description: 'Last Name of user to create',
            explode: true,
            in: 'query',
            name: 'lastName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Added',
      content: { 'application/json': { schema: AddUserResponseSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    409: {
      description:
        'Create user unsuccessful! This is normally because the username or password already exists in the KumpeApps system.',
      content: {},
    },
  },
  security: [{ app_key: [] }],
})

export const getKkidShareRoute = createRoute({
  method: 'get',
  path: '/kkid/share',
  tags: ['KKid'],
  summary: 'Create Share Link',
  description: 'Create share link',
  operationId: 'kkid_share_get',
  request: {
    query: z.object({
      linkUserId: z
        .string()
        .openapi({
          param: {
            description: 'User ID that the link should be authenticated to',
            explode: true,
            in: 'query',
            name: 'linkUserId',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      link: z
        .enum([
          'https://khome.kumpeapps.com/portal/wish-list.php',
          'https://khome.kumpeapps.com/portal/chores-today.php',
        ])
        .openapi({
          param: {
            description: 'Link to share',
            explode: true,
            in: 'query',
            name: 'link',
            required: true,
            schema: {
              enum: [
                'https://khome.kumpeapps.com/portal/wish-list.php',
                'https://khome.kumpeapps.com/portal/chores-today.php',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      scope: z
        .enum(['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'])
        .openapi({
          param: {
            description: 'Authentication scope for link',
            explode: true,
            in: 'query',
            name: 'scope',
            required: true,
            schema: {
              enum: ['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'],
              type: 'string',
            },
            style: 'form',
          },
        }),
      scope2: z
        .enum(['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication scope for link',
            explode: true,
            in: 'query',
            name: 'scope2',
            required: false,
            schema: {
              enum: ['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'],
              type: 'string',
            },
            style: 'form',
          },
        }),
      scope3: z
        .enum(['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication scope for link',
            explode: true,
            in: 'query',
            name: 'scope3',
            required: false,
            schema: {
              enum: ['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'],
              type: 'string',
            },
            style: 'form',
          },
        }),
      scope4: z
        .enum(['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication scope for link',
            explode: true,
            in: 'query',
            name: 'scope4',
            required: false,
            schema: {
              enum: ['WishList', 'WishListAdmin', 'Chores', 'ChoresAdmin'],
              type: 'string',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'authenticated link created',
      content: { 'application/json': { schema: _201ShareSchema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const getKkidUserRoute = createRoute({
  method: 'get',
  path: '/kkid/user',
  tags: ['KKid'],
  summary: 'Gets user info',
  description: 'Gets user info for authenticated user',
  operationId: 'kkid_user_get',
  request: {
    query: z.object({
      enableBool: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use bool values instead of Int 0/1',
            explode: true,
            in: 'query',
            name: 'enableBool',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: UserlistSchema } },
    },
  },
})

export const getKkidUserlistRoute = createRoute({
  method: 'get',
  path: '/kkid/userlist',
  tags: ['KKid'],
  summary: 'returns list of users',
  description:
    "By passing in the appropriate options, you can search for\nusers within the authenticated user's master account\n",
  operationId: 'kkid_userlist_get',
  request: {
    query: z.object({
      isChild: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Search by isChild flag',
            explode: true,
            in: 'query',
            name: 'isChild',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      isActive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Search by isActive flag',
            explode: true,
            in: 'query',
            name: 'isActive',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      isAdmin: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Search by isAdmin flag',
            explode: true,
            in: 'query',
            name: 'isAdmin',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableAllowance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Search by enableAllowance flag',
            explode: true,
            in: 'query',
            name: 'enableAllowance',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableChores: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Search by enableChores flag',
            explode: true,
            in: 'query',
            name: 'enableChores',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'userID of user to search',
            explode: true,
            in: 'query',
            name: 'userID',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Username of user to search',
            explode: true,
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Email address of user to search',
            explode: true,
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: UserlistSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    204: {
      description: 'No Data Returned',
      content: { 'application/json': { schema: NodataSchema } },
    },
    400: { description: 'bad input parameter', content: {} },
    401: {
      description:
        'Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters',
      content: {},
    },
    403: {
      description:
        'Forbidden- User access is denied. API user either does not have access or has been banned/locked.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
})

export const putKkidUserlistRoute = createRoute({
  method: 'put',
  path: '/kkid/userlist',
  tags: ['KKid'],
  summary: 'updates user',
  description: "By passing in the appropriate variables this method updates the user's profile\n",
  operationId: 'kkid_userlist_put',
  request: {
    query: z.object({
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'userID of the user you wish to update',
            explode: true,
            in: 'query',
            name: 'userID',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'username of user to create',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            description: 'email address of user to create',
            explode: true,
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      firstName: z
        .string()
        .openapi({
          param: {
            description: 'First Name of user to create',
            explode: true,
            in: 'query',
            name: 'firstName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      lastName: z
        .string()
        .openapi({
          param: {
            description: 'Last Name of user to create',
            explode: true,
            in: 'query',
            name: 'lastName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      emoji: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'emoji character for user',
            explode: true,
            in: 'query',
            name: 'emoji',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      tmdbKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "User's TMdB Session Key",
            explode: true,
            in: 'query',
            name: 'tmdbKey',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      enableWishList: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'set status of Wish List module enabled',
            explode: true,
            in: 'query',
            name: 'enableWishList',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableChores: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'set status of chores module enabled',
            explode: true,
            in: 'query',
            name: 'enableChores',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableAllowance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'set status of allowance module enabled',
            explode: true,
            in: 'query',
            name: 'enableAllowance',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableAdmin: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'set status of isAdmin',
            explode: true,
            in: 'query',
            name: 'enableAdmin',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableTmdb: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'set status of enableTmdb (movie and tv search)',
            explode: true,
            in: 'query',
            name: 'enableTmdb',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      enableObjectDetection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'set status of enableObjectDetection',
            explode: true,
            in: 'query',
            name: 'enableObjectDetection',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Updated',
      content: { 'application/json': { schema: AddUserResponseSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    409: {
      description:
        'Update user unsuccessful. This could be due to invalid userID, new username already exists, new email already exists, or an unknown error.',
      content: {},
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
})

export const postKkidUserlistRoute = createRoute({
  method: 'post',
  path: '/kkid/userlist',
  tags: ['KKid'],
  summary: 'adds new child user',
  description:
    'By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.\n',
  operationId: 'kkid_userlist_post',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'username of user to create',
            explode: true,
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'password of user to create',
            explode: true,
            in: 'query',
            name: 'password',
            required: true,
            schema: { format: 'password', type: 'string' },
            style: 'form',
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            description: 'email address of user to create',
            explode: true,
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      firstName: z
        .string()
        .openapi({
          param: {
            description: 'First Name of user to create',
            explode: true,
            in: 'query',
            name: 'firstName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      lastName: z
        .string()
        .openapi({
          param: {
            description: 'Last Name of user to create',
            explode: true,
            in: 'query',
            name: 'lastName',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Added',
      content: { 'application/json': { schema: AddUserResponseSchema } },
    },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    409: {
      description:
        'Create user unsuccessful! This is normally because the username or password already exists in the KumpeApps system.',
      content: {},
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const deleteKkidUserlistRoute = createRoute({
  method: 'delete',
  path: '/kkid/userlist',
  tags: ['KKid'],
  summary: 'deletes user',
  description:
    'By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)\n',
  operationId: 'kkid_userlist_delete',
  request: {
    query: z.object({
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'userID of the user you wish to delete',
            explode: true,
            in: 'query',
            name: 'userID',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User Deleted', content: {} },
    202: {
      description:
        'Accepted- Access Granted but data flow did not complete due to an unknown error.',
      content: {},
    },
    405: {
      description: 'Method Not Allowed- API user does not have access to use this method',
      content: { 'application/json': { schema: _405Schema } },
    },
    409: {
      description:
        'Create user unsuccessful! This is normally because the username or password already exists in the KumpeApps system.',
      content: {},
    },
    412: {
      description: 'API Access Denied! Your API key is invalid, expired, or not supplied!',
      content: { 'application/json': { schema: _412Schema } },
    },
  },
  security: [{ auth_key: [] }],
})

export const getKkidWishlistRoute = createRoute({
  method: 'get',
  path: '/kkid/wishlist',
  tags: ['KKid'],
  summary: 'Get list of wishlist items',
  operationId: 'kkid_wishlist_get',
  request: {
    query: z.object({
      kidUserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'userID of the kid',
            explode: true,
            in: 'query',
            name: 'kidUserId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: WishlistSchema } },
    },
  },
})

export const putKkidWishlistRoute = createRoute({
  method: 'put',
  path: '/kkid/wishlist',
  tags: ['KKid'],
  summary: "Update item on kid's wishlist",
  operationId: 'kkid_wishlist_put',
  request: {
    query: z.object({
      wishId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Wish list item ID to update',
            explode: true,
            in: 'query',
            name: 'wishId',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Item title',
            explode: true,
            in: 'query',
            name: 'title',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Item Description',
            explode: true,
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      priority: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Item Priority',
            explode: true,
            in: 'query',
            name: 'priority',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      link: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'URL Link to item',
            explode: true,
            in: 'query',
            name: 'link',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
  },
})

export const postKkidWishlistRoute = createRoute({
  method: 'post',
  path: '/kkid/wishlist',
  tags: ['KKid'],
  summary: "Add item to kid's wishlist",
  operationId: 'kkid_wishlist_post',
  request: {
    query: z.object({
      kidUserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'userID of the kid',
            explode: true,
            in: 'query',
            name: 'kidUserId',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      title: z
        .string()
        .openapi({
          param: {
            description: 'Item title',
            explode: true,
            in: 'query',
            name: 'title',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Item Description',
            explode: true,
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      priority: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Item Priority',
            explode: true,
            in: 'query',
            name: 'priority',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      link: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'URL Link to item',
            explode: true,
            in: 'query',
            name: 'link',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
  },
})

export const deleteKkidWishlistRoute = createRoute({
  method: 'delete',
  path: '/kkid/wishlist',
  tags: ['KKid'],
  summary: 'Delete item from wishlist',
  operationId: 'kkid_wishlist_delete',
  request: {
    query: z.object({
      wishId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of wishlist item to delete',
            explode: true,
            in: 'query',
            name: 'wishId',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: SuccessSchema } },
    },
  },
})
