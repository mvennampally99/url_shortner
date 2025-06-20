import { AnyObjectSchema } from "yup";
import { Request, Response, NextFunction } from "express";

const validateResource = (resourceSchema: AnyObjectSchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resourceSchema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (ex) {
    return res.status(400).send(ex);
  }
};

export default validateResource;
