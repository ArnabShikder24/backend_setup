export const getAllParams = (req) => ({ ...req.query, ...req.body, ...req.params });
