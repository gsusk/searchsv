import { Request, Response, NextFunction } from "express"

//for common middleware typing
declare type EQM = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void | Promise<void>
