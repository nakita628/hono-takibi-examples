import { createRoute, z } from '@hono/zod-openapi'

const BreadcrumbSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An action representing the breadcrumb. You can set a custom action or use one of the built-in: click, submit, navigation, request, error.',
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time in UTC of the breadcrumb. If no date and time is provided, we will use the current date and time in UTC.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message representing the breadcrumb. This should elaborate on the action.',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An enum value representing the severity of this breadcrumb. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal.',
      }),
  })
  .openapi({ description: 'A breadcrumb represent a step preceding a log message.', required: [] })
  .openapi('Breadcrumb')

const CreateBulkMessageResultSchema = z
  .object({
    location: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The location of the created message if StatusCode equals Created.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Status code of the individual messages as if it were being created through the non-bulk endpoint.\r\nIf a message was succesfully created, the status code will be 201 and location will contain an URL.\r\nIf a message was ignored, the status code will be 200 and the location will be empty.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateBulkMessageResult')

const CreateDeploymentSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When was this deployment created in UTC. Defaults to current time if not specified.',
      }),
    description: z
      .string()
      .max(8192)
      .exactOptional()
      .openapi({
        description: 'Optional description of this deployment. Can be markdown or clear text.',
      }),
    logId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'As default, deployments are attached all logs of the organization. If you want a deployment to\r\nattach to a single log only, set this to the ID of that log.',
      }),
    userEmail: z
      .email()
      .max(320)
      .exactOptional()
      .openapi({
        description:
          'The email of the person responsible for creating this deployment. This can be the email taken from\r\nyour deployment server (like Azure DevOps or Octopus).',
      }),
    userName: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'The name of the person responsible for creating this deployment. This can be the name taken from\r\nyour deployment server (like Azure DevOps or Octopus).',
      }),
    version: z
      .string()
      .max(256)
      .openapi({
        description:
          'The version number of this deployment. The value of version can be a SemVer compliant string or any other\r\nsyntax that you are using as your version numbering scheme.',
      }),
  })
  .openapi({ required: ['version'] })
  .openapi('CreateDeployment')

const CreateDeploymentResultSchema = z
  .object({
    location: z
      .url()
      .exactOptional()
      .openapi({ description: 'The location of the created deployment.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateDeploymentResult')

const CreateHeartbeatSchema = z
  .object({
    application: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'Optional string to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log.\r\nIf not set, the application name "Heartbeats" will be set on all log messages generated from this heartbeat.',
      }),
    reason: z
      .string()
      .max(8192)
      .exactOptional()
      .openapi({
        description:
          'If result is "Degraded" or "Unhealthy" you can use this property to specify why.',
      }),
    result: z
      .string()
      .max(9)
      .exactOptional()
      .openapi({
        description:
          'The result of this heartbeat. Can be "Healthy, "Degraded", or "Unhealthy". Defaults to "Healthy"',
      }),
    took: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Optional long for specifying how many milliseconds it took to execute the task resulting in this heartbeat. This can be used to get a better overview\r\nof how long a scheduled task or service is running or to figure out if the grace period should be increased.',
      }),
    version: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'Optional string to identify which version of your application logged this message. If not specified, any errors, warnings, or information messages will get\r\nthe newest version number created through deployment tracking as with normal log messages.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateHeartbeat')

const CreateLogSchema = z
  .object({ name: z.string().max(256).openapi({ description: 'Name of the new log.' }) })
  .openapi({ required: ['name'] })
  .openapi('CreateLog')

const CreateLogResultSchema = z
  .object({
    location: z.url().exactOptional().openapi({ description: 'The location of the created log.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateLogResult')

const ItemSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'The key of the item.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the item.' }),
  })
  .openapi({ description: 'Represents a key value pair.', required: [] })
  .openapi('Item')

const CreateMessageSchema = z
  .object({
    application: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log',
      }),
    breadcrumbs: z
      .array(BreadcrumbSchema)
      .exactOptional()
      .openapi({ description: 'A list of breadcrumbs preceding this log message.' }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.\r\nWhen logging through a logging framework, this field will be provided by the framework and not something that needs to be set manually.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message\r\nto a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and\r\n10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit\r\nof 256 kb.",
      }),
    cookies: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of cookies. This property only makes sense for logging messages related to web requests.',
      }),
    correlationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,\r\na unique string spanning multiple microsservices handling the same request, or similar.',
      }),
    data: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of\r\nthe exception is copied to this property. You can add additional key/value pairs, by modifying the Data\r\ndictionary on the exception or by supplying additional key/values to this API.',
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.",
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.",
      }),
    form: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.',
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname of the server logging the message.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.",
      }),
    queryString: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.',
      }),
    serverVariables: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source of the code logging the message. This could be the assembly name.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,\r\nbut could be used for logging successful status codes as well.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The textual title or headline of the message to log.' }),
    titleTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title template of the message to log. This property can be used from logging frameworks that supports\r\nstructured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title\r\nwill be "Gilfoyle says It\'s not magic. It\'s talent and sweat".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.",
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identification of the user triggering this message. You can put the users email address or your user key into this property.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other\r\nsyntax that you are using as your version numbering scheme.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateMessage')

const CreateMessageResultSchema = z
  .object({
    location: z
      .url()
      .exactOptional()
      .openapi({ description: 'The location of the created message.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateMessageResult')

const DeploymentSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When was this deployment created.' }),
    createdBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The elmah.io id of the user creating this deployment. Since deployments are created on a subscription,\r\nthe CreatedBy will contain the id of the user with the subscription.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sescription of this deployment in markdown or clear text.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this deployment.' }),
    logId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the deployment is attached a single log, this property is set to the ID of that log.\r\nIf null, the deployment is attached all logs on the organization.',
      }),
    userEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email of the person responsible for creating this deployment.',
      }),
    userName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the person responsible for creating this deployment.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version number of this deployment. The value of version can be a SemVer compliant string or any other\r\nsyntax that you are using as your version numbering scheme.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Deployment')

const LogSchema = z
  .object({
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Color of the log. The color will always be one of the following (green being the default):\r\ngreen, lightgreen, lime, yellow, orange, deeporange, red, pink, purple, deeppurple, blue, lightblue',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns true if the log is currently disabled. A log can be disabled either through the API\r\nor in the elmah.io UI.',
      }),
    environmentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Environment name this log is in or "Other" if not in an environment.\r\n"Other" is chosen over null to mimic the experience in the elmah.io UI.',
      }),
    id: z.string().exactOptional().openapi({ description: 'ID of the log.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the log.' }),
  })
  .openapi({ required: [] })
  .openapi('Log')

const MessageSchema = z
  .object({
    application: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log',
      }),
    breadcrumbs: z
      .array(BreadcrumbSchema)
      .exactOptional()
      .openapi({ description: 'A list of breadcrumbs preceding this log message.' }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message\r\nto a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and\r\n10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit\r\nof 256 kb.",
      }),
    cookies: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of cookies. This property only makes sense for logging messages related to web requests.',
      }),
    correlationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,\r\na unique string spanning multiple microsservices handling the same request, or similar.',
      }),
    data: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of\r\nthe exception is copied to this property. You can add additional key/value pairs, by modifying the Data\r\ndictionary on the exception or by supplying additional key/values to this API.',
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.",
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.",
      }),
    form: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.',
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname of the server logging the message.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this message.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.",
      }),
    queryString: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.',
      }),
    serverVariables: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source of the code logging the message. This could be the assembly name.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,\r\nbut could be used for logging successful status codes as well.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The textual title or headline of the message to log.' }),
    titleTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title template of the message to log. This property can be used from logging frameworks that supports\r\nstructured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title\r\nwill be "Gilfoyle says It\'s not magic. It\'s talent and sweat".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.",
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identification of the user triggering this message. You can put the users email address or your user key into this property.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other\r\nsyntax that you are using as your version numbering scheme.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Message')

const MessageOverviewSchema = z
  .object({
    application: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log',
      }),
    breadcrumbs: z
      .array(BreadcrumbSchema)
      .exactOptional()
      .openapi({ description: 'A list of breadcrumbs preceding this log message.' }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message\r\nto a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and\r\n10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit\r\nof 256 kb.",
      }),
    cookies: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of cookies. This property only makes sense for logging messages related to web requests.',
      }),
    correlationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,\r\na unique string spanning multiple microsservices handling the same request, or similar.',
      }),
    data: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of\r\nthe exception is copied to this property. You can add additional key/value pairs, by modifying the Data\r\ndictionary on the exception or by supplying additional key/values to this API.',
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.",
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.",
      }),
    form: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.',
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname of the server logging the message.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this message.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.",
      }),
    queryString: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.',
      }),
    serverVariables: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source of the code logging the message. This could be the assembly name.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,\r\nbut could be used for logging successful status codes as well.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The textual title or headline of the message to log.' }),
    titleTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title template of the message to log. This property can be used from logging frameworks that supports\r\nstructured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title\r\nwill be "Gilfoyle says It\'s not magic. It\'s talent and sweat".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.",
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identification of the user triggering this message. You can put the users email address or your user key into this property.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other\r\nsyntax that you are using as your version numbering scheme.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MessageOverview')

const MessagesResultSchema = z
  .object({
    messages: z
      .array(MessageOverviewSchema)
      .exactOptional()
      .openapi({ description: 'Log messages.' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of log messages found.' }),
  })
  .openapi({ required: [] })
  .openapi('MessagesResult')

const SearchSchema = z
  .object({
    from: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Search from this date.' }),
    query: z.string().exactOptional().openapi({ description: 'Lucene query.' }),
    to: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Search to this date.' }),
  })
  .openapi({ required: [] })
  .openapi('Search')

const UptimeCheckSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the uptime check.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the uptime check.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Current status of the uptime check.' }),
    url: z.string().exactOptional().openapi({ description: 'Url of the uptime check.' }),
  })
  .openapi({ required: [] })
  .openapi('UptimeCheck')

const SearchRequestBody = {
  description: 'A search object containing query, time filters etc.',
  content: {
    'application/*+json': { schema: SearchSchema },
    'application/json': { schema: SearchSchema },
    'application/json-patch+json': { schema: SearchSchema },
    'text/json': { schema: SearchSchema },
  },
}

const ApiKeySecurityScheme = {
  description:
    'All requests on the elmah.io API needs to include an API key. The API key can be provided as part of the query string or as a request header. The name of the API key needs to be <code>api_key</code>.<br/><br/>Additional resources:<br/><ul><li>[Where is my API key?](https://docs.elmah.io/where-is-my-api-key/)</li><li>[How to configure API key permissions](https://docs.elmah.io/how-to-configure-api-key-permissions/)</li></ul>',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

export const getV3DeploymentsRoute = createRoute({
  method: 'get',
  path: '/v3/deployments',
  tags: ['Deployments'],
  summary: 'Fetch a list of deployments.',
  description: 'Required permission: `deployments_read`',
  operationId: 'Deployments_GetAll',
  responses: {
    200: {
      description: 'Request for deployments successful.',
      content: {
        'application/json': { schema: z.array(DeploymentSchema) },
        'text/json': { schema: z.array(DeploymentSchema) },
        'text/plain': { schema: z.array(DeploymentSchema) },
      },
    },
    401: { description: 'API key not valid or no access to resource.' },
    402: {
      description:
        'Tried to call the deployment API without deployment tracking enabled or trial expired.',
    },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3DeploymentsRoute = createRoute({
  method: 'post',
  path: '/v3/deployments',
  tags: ['Deployments'],
  summary: 'Create a new deployment.',
  description: 'Required permission: `deployments_write`',
  operationId: 'Deployments_Create',
  request: {
    body: {
      description: 'The deployment object to create.',
      content: {
        'application/*+json': { schema: CreateDeploymentSchema },
        'application/json': { schema: CreateDeploymentSchema },
        'application/json-patch+json': { schema: CreateDeploymentSchema },
        'text/json': { schema: CreateDeploymentSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Deployment was created.',
      content: {
        'application/json': { schema: CreateDeploymentResultSchema },
        'text/json': { schema: CreateDeploymentResultSchema },
        'text/plain': { schema: CreateDeploymentResultSchema },
      },
    },
    400: { description: 'Model not valid.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: {
      description:
        'Tried to call the deployment API without deployment tracking enabled or trial expired.',
    },
    404: { description: 'Specified log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3DeploymentsIdRoute = createRoute({
  method: 'get',
  path: '/v3/deployments/{id}',
  tags: ['Deployments'],
  summary: 'Fetch a deployment by its ID.',
  description: 'Required permission: `deployments_read`',
  operationId: 'Deployments_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the deployment to fetch.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request for deployment successful.',
      content: {
        'application/json': { schema: DeploymentSchema },
        'text/json': { schema: DeploymentSchema },
        'text/plain': { schema: DeploymentSchema },
      },
    },
    400: { description: 'Id not specified.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Deployment with specified id not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const deleteV3DeploymentsIdRoute = createRoute({
  method: 'delete',
  path: '/v3/deployments/{id}',
  tags: ['Deployments'],
  summary: 'Delete a deployment by its ID.',
  description:
    "This endpoint doesn't clear the version number of messages already annotated with this deployment version.<br/><br/>Required permission: `deployments_delete`",
  operationId: 'Deployments_Delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the deployment to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Deployment was deleted.' },
    400: { description: 'Id not specified.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: {
      description:
        'Tried to call the deployment API without deployment tracking enabled or trial expired.',
    },
    404: { description: 'Deployment with specified id not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3HeartbeatsLogIdIdRoute = createRoute({
  method: 'post',
  path: '/v3/heartbeats/{logId}/{id}',
  tags: ['Heartbeats'],
  summary: 'Create a new heartbeat.',
  description: 'Required permission: `heartbeats_write`',
  operationId: 'Heartbeats_Create',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the heartbeat check.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the heartbeat check.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The details of the heartbeat.',
      content: {
        'application/*+json': { schema: CreateHeartbeatSchema },
        'application/json': { schema: CreateHeartbeatSchema },
        'application/json-patch+json': { schema: CreateHeartbeatSchema },
        'text/json': { schema: CreateHeartbeatSchema },
      },
    },
  },
  responses: {
    200: { description: 'Heartbeat was created.' },
    400: { description: 'Model not valid.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: {
      description: 'Tried to call the heartbeats API without heartbeats enabled or trial expired.',
    },
    404: { description: 'The specified log or heartbeat was not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3LogsRoute = createRoute({
  method: 'get',
  path: '/v3/logs',
  tags: ['Logs'],
  summary: 'Fetch a list of logs.',
  description: 'Required permission: `logs_read`',
  operationId: 'Logs_GetAll',
  responses: {
    200: {
      description: 'Request for logs successful.',
      content: {
        'application/json': { schema: z.array(LogSchema) },
        'text/json': { schema: z.array(LogSchema) },
        'text/plain': { schema: z.array(LogSchema) },
      },
    },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3LogsRoute = createRoute({
  method: 'post',
  path: '/v3/logs',
  tags: ['Logs'],
  summary: 'Create a new log.',
  description: 'Required permission: `logs_write`',
  operationId: 'Logs_Create',
  request: {
    body: {
      description: 'The log object to create.',
      content: {
        'application/*+json': { schema: CreateLogSchema },
        'application/json': { schema: CreateLogSchema },
        'application/json-patch+json': { schema: CreateLogSchema },
        'text/json': { schema: CreateLogSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Log where successfully created.',
      content: {
        'application/json': { schema: CreateLogResultSchema },
        'text/json': { schema: CreateLogResultSchema },
        'text/plain': { schema: CreateLogResultSchema },
      },
    },
    400: { description: 'Something wrong with the parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3LogsIdRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{id}',
  tags: ['Logs'],
  summary: 'Fetch a log by its ID.',
  description: 'Required permission: `logs_read`',
  operationId: 'Logs_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log to fetch.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request for log successful.',
      content: {
        'application/json': { schema: LogSchema },
        'text/json': { schema: LogSchema },
        'text/plain': { schema: LogSchema },
      },
    },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3LogsIdDiagnoseRoute = createRoute({
  method: 'get',
  path: '/v3/logs/{id}/_diagnose',
  tags: ['Logs'],
  summary: 'Help diagnose logging problems.',
  description: 'Required permission: `messages_write`',
  operationId: 'Logs_Diagnose',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log to diagnose.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Log was diagnosed.',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3LogsIdDisableRoute = createRoute({
  method: 'post',
  path: '/v3/logs/{id}/_disable',
  tags: ['Logs'],
  summary: 'Disable a log by its ID.',
  description: 'Required permission: `logs_write`',
  operationId: 'Logs_Disable',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log to disable.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Log was disabled.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3LogsIdEnableRoute = createRoute({
  method: 'post',
  path: '/v3/logs/{id}/_enable',
  tags: ['Logs'],
  summary: 'Enable a log by its ID.',
  description: 'Required permission: `logs_write`',
  operationId: 'Logs_Enable',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log to enable.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Log was enabled.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3MessagesLogIdRoute = createRoute({
  method: 'get',
  path: '/v3/messages/{logId}',
  tags: ['Messages'],
  summary: 'Fetch messages from a log.',
  description: 'Required permission: `messages_read`',
  operationId: 'Messages_GetAll',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the messages.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number of the result.',
            in: 'query',
            name: 'pageIndex',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of messages to load (max 100) or 15 if not set.',
            in: 'query',
            name: 'pageSize',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A full-text or Lucene query to limit the messages by.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'A start date and time to search from (not included).',
            in: 'query',
            name: 'from',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'An end date and time to search to (not included).',
            in: 'query',
            name: 'to',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      includeHeaders: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include headers like server variables and cookies in the result (slower).',
            in: 'query',
            name: 'includeHeaders',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Log found and may contain messages.',
      content: {
        'application/json': { schema: MessagesResultSchema },
        'text/json': { schema: MessagesResultSchema },
        'text/plain': { schema: MessagesResultSchema },
      },
    },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3MessagesLogIdRoute = createRoute({
  method: 'post',
  path: '/v3/messages/{logId}',
  tags: ['Messages'],
  summary: 'Create a new message.',
  description: 'Required permission: `messages_write`',
  operationId: 'Messages_Create',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log which should contain the new message.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The message object to create.',
      content: {
        'application/*+json': { schema: CreateMessageSchema },
        'application/json': { schema: CreateMessageSchema },
        'application/json-patch+json': { schema: CreateMessageSchema },
        'text/json': { schema: CreateMessageSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Message was not created.',
      content: {
        'application/json': { schema: CreateMessageResultSchema },
        'text/json': { schema: CreateMessageResultSchema },
        'text/plain': { schema: CreateMessageResultSchema },
      },
    },
    201: {
      description: 'Message was successfully created.',
      content: {
        'application/json': { schema: CreateMessageResultSchema },
        'text/json': { schema: CreateMessageResultSchema },
        'text/plain': { schema: CreateMessageResultSchema },
      },
    },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    413: {
      description:
        'Message too large. Messages must not exceed 256 kb. As additional information, some fields are trimmed down when processed on the backend.',
    },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const deleteV3MessagesLogIdRoute = createRoute({
  method: 'delete',
  path: '/v3/messages/{logId}',
  tags: ['Messages'],
  summary: 'Deletes a list of messages by logid and query.',
  description: 'Required permission: `messages_delete`',
  operationId: 'Messages_DeleteAll',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the message.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: SearchRequestBody,
  },
  responses: {
    200: { description: 'Messages where deleted.' },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3MessagesLogIdBulkRoute = createRoute({
  method: 'post',
  path: '/v3/messages/{logId}/_bulk',
  tags: ['Messages'],
  summary: 'Create one or more new messages.',
  description: 'Required permission: `messages_write`',
  operationId: 'Messages_CreateBulk',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log which should contain the new messages.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The messages to create.',
      content: {
        'application/*+json': { schema: z.array(CreateMessageSchema) },
        'application/json': { schema: z.array(CreateMessageSchema) },
        'application/json-patch+json': { schema: z.array(CreateMessageSchema) },
        'text/json': { schema: z.array(CreateMessageSchema) },
      },
    },
  },
  responses: {
    200: {
      description:
        'Zero or more messages where successfully created. Check the response body for details.',
      content: {
        'application/json': { schema: z.array(CreateBulkMessageResultSchema) },
        'text/json': { schema: z.array(CreateBulkMessageResultSchema) },
        'text/plain': { schema: z.array(CreateBulkMessageResultSchema) },
      },
    },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3MessagesLogIdFixRoute = createRoute({
  method: 'post',
  path: '/v3/messages/{logId}/_fix',
  tags: ['Messages'],
  summary: 'Mark a list of messages as fixed by logid and query.',
  description: 'Required permission: `messages_write`',
  operationId: 'Messages_FixAll',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the messages.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: SearchRequestBody,
  },
  responses: {
    200: { description: 'Messages where marked as fixed.' },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3MessagesLogIdIdRoute = createRoute({
  method: 'get',
  path: '/v3/messages/{logId}/{id}',
  tags: ['Messages'],
  summary: 'Fetch a message by its ID.',
  description: 'Required permission: `messages_read`',
  operationId: 'Messages_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to fetch.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the message.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message found.',
      content: {
        'application/json': { schema: MessageSchema },
        'text/json': { schema: MessageSchema },
        'text/plain': { schema: MessageSchema },
      },
    },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Message not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const deleteV3MessagesLogIdIdRoute = createRoute({
  method: 'delete',
  path: '/v3/messages/{logId}/{id}',
  tags: ['Messages'],
  summary: 'Delete a message by its ID.',
  description: 'Required permission: `messages_delete`',
  operationId: 'Messages_Delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the message.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Message where deleted.' },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log or message not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3MessagesLogIdIdFixRoute = createRoute({
  method: 'post',
  path: '/v3/messages/{logId}/{id}/_fix',
  tags: ['Messages'],
  summary: 'Fix a message by its ID.',
  description: 'Required permission: `messages_write`',
  operationId: 'Messages_Fix',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to fix.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the message.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      markAllAsFixed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true, all instances of the log message are set to fixed.',
            in: 'query',
            name: 'markAllAsFixed',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Message was fixed.' },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Message not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3MessagesLogIdIdHideRoute = createRoute({
  method: 'post',
  path: '/v3/messages/{logId}/{id}/_hide',
  tags: ['Messages'],
  summary: 'Hide a message by its ID.',
  description: 'Required permission: `messages_write`',
  operationId: 'Messages_Hide',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to hide.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      logId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the log containing the message.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Message was hidden.' },
    400: { description: 'Something wrong with the query parameters.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Message not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const postV3SourcemapsLogIdRoute = createRoute({
  method: 'post',
  path: '/v3/sourcemaps/{logId}',
  tags: ['SourceMaps'],
  summary:
    'Create or update a translation between a minified JavaScript path to the minified JavaScript and source map files.',
  description: 'Required permission: `sourcemaps_write`',
  operationId: 'SourceMaps_CreateOrUpdate',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the log which should contain the minified JavaScript and source map.',
            in: 'path',
            name: 'logId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              MinifiedJavaScript: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The minified JavaScript file. Only files with an extension of .js and content type of text/javascript will be accepted.',
                }),
              Path: z
                .url()
                .max(2048)
                .openapi({
                  description:
                    'An URL to the online minified JavaScript file. The URL can be absolute or relative but will always be converted to a relative path (no protocol, domain, and query parameters).\r\nelmah.io uses this path to lookup any lines in a JS stack trace that will need de-minification.',
                }),
              SourceMap: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The source map file. Only files with an extension of .map and content type of application/json will be accepted.',
                }),
            })
            .openapi({ required: ['Path', 'SourceMap', 'MinifiedJavaScript'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Source map was successfully created.' },
    400: { description: 'Something wrong with the query parameters or form.' },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the logs API but the trial expired.' },
    404: { description: 'Log not found.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})

export const getV3UptimechecksRoute = createRoute({
  method: 'get',
  path: '/v3/uptimechecks',
  tags: ['UptimeChecks'],
  summary:
    'Fetch a list of uptime checks. Currently in closed beta. Get in contact to get access to this endpoint.',
  description: 'Required permission: `uptimechecks_read`',
  operationId: 'UptimeChecks_GetAll',
  responses: {
    200: {
      description: 'Request for uptime checks successful.',
      content: {
        'application/json': { schema: z.array(UptimeCheckSchema) },
        'text/json': { schema: z.array(UptimeCheckSchema) },
        'text/plain': { schema: z.array(UptimeCheckSchema) },
      },
    },
    401: { description: 'API key not valid or no access to resource.' },
    402: { description: 'Tried to call the uptime checks API but the trial expired.' },
    429: {
      description: 'A maximum of 500 requests per minute and 3600 requests per hour are permitted',
    },
  },
})
