
-- 1. Fix SELECT policy: restrict to admin users only via app_metadata
DROP POLICY "solo admin puede leer" ON public.pedidos;

CREATE POLICY "only admin can select orders"
ON public.pedidos
FOR SELECT
TO authenticated
USING (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

-- 2. Add CHECK constraints for server-side input validation
ALTER TABLE public.pedidos
ADD CONSTRAINT celular_format CHECK (celular ~ '^\d{10}$');

ALTER TABLE public.pedidos
ADD CONSTRAINT cedula_format CHECK (cedula IS NULL OR cedula ~ '^\d{6,10}$');

ALTER TABLE public.pedidos
ADD CONSTRAINT cantidad_valid CHECK (cantidad IN (1, 2));
