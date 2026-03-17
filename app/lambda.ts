import { handle } from 'hono/aws-lambda'

import { app } from './hono-app'

export const handler = handle(app)
