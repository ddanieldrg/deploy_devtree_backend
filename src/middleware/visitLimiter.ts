import rateLimit from 'express-rate-limit'

export const visitLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 30,             // Máximo 30 visitas por IP en ese tiempo
  message: 'Demasiadas visitas recientes, intentar nuevamente'
})