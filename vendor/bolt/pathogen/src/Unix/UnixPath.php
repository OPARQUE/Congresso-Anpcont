<?php

/*
 * This file is part of the Pathogen package.
 *
 * Copyright © 2014 Erin Millard
 *
 * For the full copyright and license information, please view the LICENSE file
 * that was distributed with this source code.
 */

namespace Eloquent\Pathogen\Unix;

use Eloquent\Pathogen\Factory\PathFactoryInterface;
use Eloquent\Pathogen\Path;

/**
 * A static utility class for constructing Unix paths.
 *
 * Do not use this class in type hints; use UnixPathInterface instead.
 */
abstract class UnixPath extends Path
{
    /**
     * Get the most appropriate path factory for this type of path.
     *
     * @return PathFactoryInterface The path factory.
     */
    protected static function factory()
    {
        return Factory\UnixPathFactory::instance();
    }
}
